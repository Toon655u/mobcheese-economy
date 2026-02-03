(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mobcheese-solana/app/types/mobcheese.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"version":"0.1.0","name":"mobcheese","instructions":[{"name":"joinFamily","accounts":[{"name":"family","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]}],"metadata":{"address":"8n1Q2Qk6Qk6Qk6Qk6Qk6Qk6Qk6Qk6Qk6Qk6Qk6Qk6Qk6"}});}),
"[project]/mobcheese-solana/app/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token/lib/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$types$2f$mobcheese$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/types/mobcheese.json (json)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const IDL = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$types$2f$mobcheese$2e$json__$28$json$29$__["default"];
// Wrapper to handle both sync and async versions
const getAssociatedTokenAddress = async (mint, owner)=>{
    const { getAssociatedTokenAddressSync } = await __turbopack_context__.A("[project]/mobcheese-solana/app/node_modules/@solana/spl-token/lib/esm/index.js [app-client] (ecmascript, async loader)");
    return getAssociatedTokenAddressSync(mint, owner);
};
const WalletMultiButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/mobcheese-solana/app/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.WalletMultiButton), {
    loadableGenerated: {
        modules: [
            "[project]/mobcheese-solana/app/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = WalletMultiButton;
function Home() {
    _s();
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [txSig, setTxSig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const hasReadyWallet = wallet.wallets.some((w)=>w.readyState === __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletReadyState"].Installed || w.readyState === __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletReadyState"].Loadable);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (wallet.wallet?.adapter?.readyState === __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletReadyState"].NotDetected) {
                wallet.select(null);
            }
        }
    }["Home.useEffect"], [
        wallet
    ]);
    // Load from environment variables
    const programIdStr = ("TURBOPACK compile-time value", "F8MN4tsJWJpRmnBsXZ4i99CkJ9TEWnNsgqqSGJHQdhzz") || "F8MN4tsJWJpRmnBsXZ4i99CkJ9TEWnNsgqqSGJHQdhzz";
    const mintStr = ("TURBOPACK compile-time value", "3FVcFUAz4aB3kmoMi9BnJ1ZVR3ZurbM2TVW1dnq8VS67") || "";
    const treasuryStr = ("TURBOPACK compile-time value", "4bPx39Suc4zFcEHBrSQoHTgtP3WR8aGhCMgdgbEgUDtx") || "";
    // Check if configuration is valid
    const isConfigured = mintStr && treasuryStr && !mintStr.includes("YOUR_") && !treasuryStr.includes("YOUR_");
    const joinFamily = async ()=>{
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
                throw new Error("Please configure your environment:\n" + "1. Create app/.env.local file\n" + "2. Set NEXT_PUBLIC_MINT_ADDRESS\n" + "3. Set NEXT_PUBLIC_TREASURY_ADDRESS\n" + "See DEPLOYMENT.md for details");
            }
            // Create PublicKey objects only after validation
            const PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](programIdStr);
            const MINT = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](mintStr);
            const TREASURY = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](treasuryStr);
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
                preflightCommitment: "processed"
            });
            // Use the imported IDL instead of fetching from chain
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Program"](IDL, provider);
            // PDA for membership
            const [memberPDA] = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
                __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("mobcheese"),
                wallet.publicKey.toBuffer()
            ], PROGRAM_ID);
            // Config PDA
            const [configPDA] = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
                __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("config")
            ], PROGRAM_ID);
            // Treasury authority PDA
            const [treasuryAuthority] = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
                __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("treasury")
            ], PROGRAM_ID);
            // Associated token account for user
            const userTokenAccount = await getAssociatedTokenAddress(MINT, wallet.publicKey);
            const tx = await program.methods.joinFamily().accounts({
                config: configPDA,
                member: memberPDA,
                user: wallet.publicKey,
                userTokenAccount,
                treasury: TREASURY,
                treasuryAuthority,
                mint: MINT,
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"],
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            setTxSig(tx);
            setError("");
        } catch (err) {
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
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            marginTop: "50px",
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "2.5rem"
                },
                children: "Join the MobCheese Family 🧀"
            }, void 0, false, {
                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "30px"
                },
                children: hasReadyWallet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {}, void 0, false, {
                    fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://phantom.app/",
                    target: "_blank",
                    rel: "noreferrer",
                    style: {
                        display: "inline-block",
                        padding: "12px 18px",
                        borderRadius: "8px",
                        background: "#fff",
                        color: "#000",
                        fontWeight: 600,
                        textDecoration: "none"
                    },
                    children: "Install a Solana wallet"
                }, void 0, false, {
                    fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            !isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "20px",
                    padding: "20px",
                    background: "rgba(255, 193, 7, 0.9)",
                    borderRadius: "12px",
                    maxWidth: "600px",
                    margin: "20px auto",
                    color: "#333"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            marginBottom: "10px",
                            fontSize: "20px"
                        },
                        children: "⚙️ Configuration Required"
                    }, void 0, false, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: "10px"
                        },
                        children: [
                            "To enable the app, create ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "app/.env.local"
                            }, void 0, false, {
                                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                lineNumber: 203,
                                columnNumber: 39
                            }, this),
                            " with:"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        style: {
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            overflow: "auto",
                            fontSize: "12px"
                        },
                        children: `NEXT_PUBLIC_PROGRAM_ID=${programIdStr}
NEXT_PUBLIC_MINT_ADDRESS=<your-mint-address>
NEXT_PUBLIC_TREASURY_ADDRESS=<your-treasury-address>`
                    }, void 0, false, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: "10px",
                            fontSize: "14px"
                        },
                        children: [
                            "See ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "DEPLOYMENT.md"
                            }, void 0, false, {
                                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                lineNumber: 219,
                                columnNumber: 17
                            }, this),
                            " for setup instructions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this),
            wallet.publicKey && isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: joinFamily,
                        disabled: loading,
                        style: {
                            padding: "15px 30px",
                            fontSize: "18px",
                            marginTop: "20px"
                        },
                        children: loading ? "Processing..." : "Join the Family"
                    }, void 0, false, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px",
                            padding: "15px",
                            background: "#fee",
                            borderRadius: "8px",
                            color: "#c33",
                            maxWidth: "500px",
                            margin: "20px auto",
                            whiteSpace: "pre-wrap"
                        },
                        children: [
                            "⚠️ ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 239,
                        columnNumber: 13
                    }, this),
                    txSig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px",
                            padding: "20px",
                            background: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "12px",
                            maxWidth: "500px",
                            margin: "20px auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#4caf50",
                                    marginBottom: "10px"
                                },
                                children: "✅ Welcome to the Family!"
                            }, void 0, false, {
                                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://solscan.io/tx/${txSig}?cluster=devnet`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    style: {
                                        color: "#667eea",
                                        fontWeight: "bold",
                                        fontSize: "16px"
                                    },
                                    children: "View Transaction on Solscan →"
                                }, void 0, false, {
                                    fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 256,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            !wallet.publicKey && isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "white",
                    marginTop: "20px",
                    fontSize: "18px"
                },
                children: "Connect your wallet to join the family"
            }, void 0, false, {
                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(Home, "J+ikQMXY4ioJbeJfl9QI6WT4jd4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "WalletMultiButton");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mobcheese-solana_app_e1c33b22._.js.map