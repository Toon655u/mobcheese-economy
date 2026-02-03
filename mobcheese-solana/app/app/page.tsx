"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import * as anchor from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { 
  TOKEN_PROGRAM_ID, 
  getAssociatedTokenAddress as getAssociatedTokenAddressOrig 
} from "@solana/spl-token";
import type { Mobcheese } from "../types/mobcheese";
import IDLJson from "../types/mobcheese.json";

const IDL = IDLJson as unknown as Mobcheese;

// Wrapper to handle both sync and async versions
const getAssociatedTokenAddress = async (mint: PublicKey, owner: PublicKey) => {
  const { getAssociatedTokenAddressSync } = await import("@solana/spl-token");
  return getAssociatedTokenAddressSync(mint, owner);
};

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

export default function Home() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [txSig, setTxSig] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasReadyWallet = wallet.wallets.some(
    (w) =>
      w.readyState === WalletReadyState.Installed ||
      w.readyState === WalletReadyState.Loadable
  );

  useEffect(() => {
    if (
      wallet.wallet?.adapter?.readyState === WalletReadyState.NotDetected
    ) {
      wallet.select(null);
    }
  }, [wallet]);

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
      const userTokenAccount = await getAssociatedTokenAddress(
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
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1 style={{ color: "white", marginBottom: "20px", fontSize: "2.5rem" }}>
        Join the MobCheese Family 🧀
      </h1>
      
      <div style={{ marginBottom: "30px" }}>
        {hasReadyWallet ? (
          <WalletMultiButton />
        ) : (
          <a
            href="https://phantom.app/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: "8px",
              background: "#fff",
              color: "#000",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Install a Solana wallet
          </a>
        )}
      </div>

      {!isConfigured && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "rgba(255, 193, 7, 0.9)",
            borderRadius: "12px",
            maxWidth: "600px",
            margin: "20px auto",
            color: "#333",
          }}
        >
          <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
            ⚙️ Configuration Required
          </h3>
          <p style={{ marginBottom: "10px" }}>
            To enable the app, create <code>app/.env.local</code> with:
          </p>
          <pre
            style={{
              background: "#fff",
              padding: "10px",
              borderRadius: "5px",
              overflow: "auto",
              fontSize: "12px",
            }}
          >
            {`NEXT_PUBLIC_PROGRAM_ID=${programIdStr}
NEXT_PUBLIC_MINT_ADDRESS=<your-mint-address>
NEXT_PUBLIC_TREASURY_ADDRESS=<your-treasury-address>`}
          </pre>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            See <strong>DEPLOYMENT.md</strong> for setup instructions
          </p>
        </div>
      )}

      {wallet.publicKey && isConfigured && (
        <>
          <button
            onClick={joinFamily}
            disabled={loading}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            {loading ? "Processing..." : "Join the Family"}
          </button>

          {error && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                background: "#fee",
                borderRadius: "8px",
                color: "#c33",
                maxWidth: "500px",
                margin: "20px auto",
                whiteSpace: "pre-wrap",
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {txSig && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "12px",
                maxWidth: "500px",
                margin: "20px auto",
              }}
            >
              <h3 style={{ color: "#4caf50", marginBottom: "10px" }}>
                ✅ Welcome to the Family!
              </h3>
              <p>
                <a
                  href={`https://solscan.io/tx/${txSig}?cluster=devnet`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#667eea",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  View Transaction on Solscan →
                </a>
              </p>
            </div>
          )}
        </>
      )}

      {!wallet.publicKey && isConfigured && (
        <p style={{ color: "white", marginTop: "20px", fontSize: "18px" }}>
          Connect your wallet to join the family
        </p>
      )}
    </div>
  );
}
