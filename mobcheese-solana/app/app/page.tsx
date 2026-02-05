"use client";

import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import * as anchor from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { 
  TOKEN_PROGRAM_ID, 
  getAssociatedTokenAddressSync
} from "@solana/spl-token";
import type { Mobcheese } from "../types/mobcheese";
import IDLJson from "../types/mobcheese.json";

const IDL = IDLJson as unknown as Mobcheese;

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

// Style constants to prevent recreation on every render
const styles = {
  container: { textAlign: "center" as const, marginTop: "50px", padding: "20px" },
  heading: { color: "white", marginBottom: "20px", fontSize: "2.5rem" },
  walletContainer: { marginBottom: "30px" },
  installWalletLink: {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "8px",
    background: "#fff",
    color: "#000",
    fontWeight: 600,
    textDecoration: "none",
  },
  configWarning: {
    marginTop: "20px",
    padding: "20px",
    background: "rgba(255, 193, 7, 0.9)",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "20px auto",
    color: "#333",
  },
  configHeading: { marginBottom: "10px", fontSize: "20px" },
  configText: { marginBottom: "10px" },
  configCode: {
    background: "#fff",
    padding: "10px",
    borderRadius: "5px",
    overflow: "auto" as const,
    fontSize: "12px",
  },
  configFooter: { marginTop: "10px", fontSize: "14px" },
  joinButton: {
    padding: "15px 30px",
    fontSize: "18px",
    marginTop: "20px",
  },
  errorBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#fee",
    borderRadius: "8px",
    color: "#c33",
    maxWidth: "500px",
    margin: "20px auto",
    whiteSpace: "pre-wrap" as const,
  },
  successBox: {
    marginTop: "20px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    maxWidth: "500px",
    margin: "20px auto",
  },
  successHeading: { color: "#4caf50", marginBottom: "10px" },
  successLink: {
    color: "#667eea",
    fontWeight: "bold",
    fontSize: "16px",
  },
  connectMessage: { color: "white", marginTop: "20px", fontSize: "18px" },
};

export default function Home() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [txSig, setTxSig] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Memoize wallet ready state to prevent recalculation on every render
  const hasReadyWallet = useMemo(
    () =>
      wallet.wallets.some(
        (w) =>
          w.readyState === WalletReadyState.Installed ||
          w.readyState === WalletReadyState.Loadable
      ),
    [wallet.wallets]
  );

  useEffect(() => {
    if (
      wallet.wallet?.adapter?.readyState === WalletReadyState.NotDetected
    ) {
      wallet.select(null);
    }
  }, [wallet.wallet?.adapter?.readyState, wallet]);

  // Load from environment variables
  const programIdStr = process.env.NEXT_PUBLIC_PROGRAM_ID || "F8MN4tsJWJpRmnBsXZ4i99CkJ9TEWnNsgqqSGJHQdhzz";
  const mintStr = process.env.NEXT_PUBLIC_MINT_ADDRESS || "";
  const treasuryStr = process.env.NEXT_PUBLIC_TREASURY_ADDRESS || "";

  // Check if configuration is valid
  const isConfigured = mintStr && treasuryStr && 
    !mintStr.includes("YOUR_") && 
    !treasuryStr.includes("YOUR_");

  const joinFamily = async () => {
    if (!wallet.publicKey) {
      setError("Please connect your wallet first!");
      return;
    }

    setLoading(true);
    setError("");
    setTxSig("");

    try {
      // Validate environment configuration
      if (!isConfigured) {
        throw new Error(
          "Please configure your environment:\n" +
          "1. Create app/.env.local file\n" +
          "2. Set NEXT_PUBLIC_MINT_ADDRESS\n" +
          "3. Set NEXT_PUBLIC_TREASURY_ADDRESS\n" +
          "See DEPLOYMENT.md for details"
        );
      }

      // Create PublicKey objects only after validation
      const PROGRAM_ID = new PublicKey(programIdStr);
      const MINT = new PublicKey(mintStr);
      const TREASURY = new PublicKey(treasuryStr);

      const provider = new anchor.AnchorProvider(connection, wallet as any, {
        preflightCommitment: "processed",
      });

      // Use the imported IDL instead of fetching from chain
      const program = new anchor.Program<Mobcheese>(IDL, provider);

      // PDA for membership
      const [memberPDA] = PublicKey.findProgramAddressSync(
        [Buffer.from("mobcheese"), wallet.publicKey.toBuffer()],
        PROGRAM_ID
      );

      // Config PDA
      const [configPDA] = PublicKey.findProgramAddressSync(
        [Buffer.from("config")],
        PROGRAM_ID
      );

      // Treasury authority PDA
      const [treasuryAuthority] = PublicKey.findProgramAddressSync(
        [Buffer.from("treasury")],
        PROGRAM_ID
      );

      // Associated token account for user
      const userTokenAccount = getAssociatedTokenAddressSync(
        MINT,
        wallet.publicKey
      );

      const tx = await program.methods
        .joinFamily()
        .accounts(
          {
            config: configPDA,
            member: memberPDA,
            user: wallet.publicKey,
            userTokenAccount,
            treasury: TREASURY,
            treasuryAuthority,
            mint: MINT,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          } as any
        )
        .rpc();

      setTxSig(tx);
      setError("");
    } catch (err: any) {
      console.error("Transaction error:", err);
      
      // Handle specific error codes
      if (err.toString().includes("AlreadyMember")) {
        setError("You are already a member of the MobCheese family!");
      } else if (err.toString().includes("insufficient funds")) {
        setError("Insufficient SOL for transaction fees");
      } else if (err.toString().includes("InvalidTokenAccount")) {
        setError("Invalid token account - please create one first");
      } else {
        setError(err.message || "Transaction failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Join the MobCheese Family 🧀
      </h1>
      
      <div style={styles.walletContainer}>
        {hasReadyWallet ? (
          <WalletMultiButton />
        ) : (
          <a
            href="https://phantom.app/"
            target="_blank"
            rel="noreferrer"
            style={styles.installWalletLink}
          >
            Install a Solana wallet
          </a>
        )}
      </div>

      {!isConfigured && (
        <div style={styles.configWarning}>
          <h3 style={styles.configHeading}>
            ⚙️ Configuration Required
          </h3>
          <p style={styles.configText}>
            To enable the app, create <code>app/.env.local</code> with:
          </p>
          <pre style={styles.configCode}>
            {`NEXT_PUBLIC_PROGRAM_ID=${programIdStr}
NEXT_PUBLIC_MINT_ADDRESS=<your-mint-address>
NEXT_PUBLIC_TREASURY_ADDRESS=<your-treasury-address>`}
          </pre>
          <p style={styles.configFooter}>
            See <strong>DEPLOYMENT.md</strong> for setup instructions
          </p>
        </div>
      )}

      {wallet.publicKey && isConfigured && (
        <>
          <button
            onClick={joinFamily}
            disabled={loading}
            style={styles.joinButton}
          >
            {loading ? "Processing..." : "Join the Family"}
          </button>

          {error && (
            <div style={styles.errorBox}>
              ⚠️ {error}
            </div>
          )}

          {txSig && (
            <div style={styles.successBox}>
              <h3 style={styles.successHeading}>
                ✅ Welcome to the Family!
              </h3>
              <p>
                <a
                  href={`https://solscan.io/tx/${txSig}?cluster=devnet`}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.successLink}
                >
                  View Transaction on Solscan →
                </a>
              </p>
            </div>
          )}
        </>
      )}

      {!wallet.publicKey && isConfigured && (
        <p style={styles.connectMessage}>
          Connect your wallet to join the family
        </p>
      )}
    </div>
  );
}
