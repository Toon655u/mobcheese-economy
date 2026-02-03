module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@solana/wallet-adapter-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@coral-xyz/anchor'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@solana/web3.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@solana/spl-token'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
"use client";
;
;
;
;
;
;
;
const WalletMultiButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    ssr: false
});
function Home() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [txSig, setTxSig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
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
            const PROGRAM_ID = new PublicKey(programIdStr);
            const MINT = new PublicKey(mintStr);
            const TREASURY = new PublicKey(treasuryStr);
            const provider = new anchor.AnchorProvider(connection, wallet, {
                preflightCommitment: "processed"
            });
            const idl = await anchor.Program.fetchIdl(PROGRAM_ID, provider);
            if (!idl) throw new Error("IDL not found for program");
            const program = new anchor.Program(idl, provider);
            // PDA for membership
            const [memberPDA] = PublicKey.findProgramAddressSync([
                Buffer.from("mobcheese"),
                wallet.publicKey.toBuffer()
            ], PROGRAM_ID);
            // Treasury authority PDA
            const [treasuryAuthority] = PublicKey.findProgramAddressSync([
                Buffer.from("treasury")
            ], PROGRAM_ID);
            // Associated token account for user
            const userTokenAccount = await getAssociatedTokenAddress(MINT, wallet.publicKey);
            const tx = await program.methods.joinFamily().accounts({
                member: memberPDA,
                user: wallet.publicKey,
                userTokenAccount,
                treasury: TREASURY,
                treasuryAuthority,
                mint: MINT,
                tokenProgram: TOKEN_PROGRAM_ID,
                systemProgram: SystemProgram.programId
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            marginTop: "50px",
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "2.5rem"
                },
                children: "Join the MobCheese Family 🧀"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "30px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            !isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            marginBottom: "10px",
                            fontSize: "20px"
                        },
                        children: "⚙️ Configuration Required"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: "10px"
                        },
                        children: [
                            "To enable the app, create ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "app/.env.local"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 149,
                                columnNumber: 39
                            }, this),
                            " with:"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
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
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: "10px",
                            fontSize: "14px"
                        },
                        children: [
                            "See ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "DEPLOYMENT.md"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 165,
                                columnNumber: 17
                            }, this),
                            " for setup instructions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this),
            wallet.publicKey && isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: joinFamily,
                        disabled: loading,
                        style: {
                            padding: "15px 30px",
                            fontSize: "18px",
                            marginTop: "20px"
                        },
                        children: loading ? "Processing..." : "Join the Family"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this),
                    txSig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px",
                            padding: "20px",
                            background: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "12px",
                            maxWidth: "500px",
                            margin: "20px auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#4caf50",
                                    marginBottom: "10px"
                                },
                                children: "✅ Welcome to the Family!"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 202,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            !wallet.publicKey && isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "white",
                    marginTop: "20px",
                    fontSize: "18px"
                },
                children: "Connect your wallet to join the family"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Bproject%5D_app_page_tsx_55b2e5ee._.js.map