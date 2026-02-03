module.exports = [
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[project]/mobcheese-solana/app/types/mobcheese.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/mobcheese.json`.
 */ __turbopack_context__.s([
    "IDL",
    ()=>IDL,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const IDL = {
    address: "F8MN4tsJWJpRmnBsXZ4i99CkJ9TEWnNsgqqSGJHQdhzz",
    metadata: {
        name: "mobcheese",
        version: "0.1.0",
        spec: "0.1.0",
        description: "Created with Anchor"
    },
    instructions: [
        {
            name: "initializeConfig",
            discriminator: [
                208,
                127,
                21,
                1,
                194,
                190,
                196,
                70
            ],
            accounts: [
                {
                    name: "config",
                    writable: true,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                value: [
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    name: "treasuryAuthority",
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                value: [
                                    116,
                                    114,
                                    101,
                                    97,
                                    115,
                                    117,
                                    114,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    name: "authority",
                    writable: true,
                    signer: true
                },
                {
                    name: "systemProgram",
                    address: "11111111111111111111111111111111"
                }
            ],
            args: [
                {
                    name: "membershipFee",
                    type: "u64"
                },
                {
                    name: "protectionFee",
                    type: "u64"
                }
            ]
        },
        {
            name: "joinFamily",
            discriminator: [
                134,
                225,
                43,
                49,
                109,
                190,
                250,
                41
            ],
            accounts: [
                {
                    name: "config",
                    writable: true,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                value: [
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    name: "member",
                    writable: true,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                value: [
                                    109,
                                    101,
                                    109,
                                    98,
                                    101,
                                    114
                                ]
                            },
                            {
                                kind: "account",
                                path: "user"
                            }
                        ]
                    }
                },
                {
                    name: "treasuryAuthority",
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                value: [
                                    116,
                                    114,
                                    101,
                                    97,
                                    115,
                                    117,
                                    114,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    name: "treasuryAccount",
                    writable: true,
                    pda: {
                        seeds: [
                            {
                                kind: "account",
                                path: "treasuryAuthority"
                            },
                            {
                                kind: "const",
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                kind: "account",
                                path: "cheeseTokenMint"
                            }
                        ],
                        program: {
                            kind: "const",
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    name: "user",
                    writable: true,
                    signer: true
                },
                {
                    name: "cheeseTokenMint"
                },
                {
                    name: "systemProgram",
                    address: "11111111111111111111111111111111"
                },
                {
                    name: "tokenProgram",
                    address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                }
            ],
            args: []
        },
        {
            name: "offerProtection",
            discriminator: [
                37,
                106,
                85,
                98,
                183,
                146,
                47,
                96
            ],
            accounts: [
                {
                    name: "config"
                },
                {
                    name: "member",
                    writable: true,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                value: [
                                    109,
                                    101,
                                    109,
                                    98,
                                    101,
                                    114
                                ]
                            },
                            {
                                kind: "account",
                                path: "user"
                            }
                        ]
                    }
                },
                {
                    name: "treasuryAuthority",
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                value: [
                                    116,
                                    114,
                                    101,
                                    97,
                                    115,
                                    117,
                                    114,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    name: "treasuryAccount",
                    writable: true
                },
                {
                    name: "userTokenAccount",
                    writable: true
                },
                {
                    name: "user",
                    signer: true
                },
                {
                    name: "tokenProgram",
                    address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                }
            ],
            args: []
        }
    ],
    accounts: [
        {
            name: "config",
            discriminator: [
                155,
                12,
                170,
                156,
                236,
                247,
                208,
                220
            ]
        },
        {
            name: "memberAccount",
            discriminator: [
                181,
                75,
                213,
                54,
                123,
                241,
                124,
                250
            ]
        }
    ],
    events: [
        {
            name: "familyJoined",
            discriminator: [
                75,
                56,
                201,
                78,
                63,
                76,
                158,
                123
            ]
        },
        {
            name: "protectionOffered",
            discriminator: [
                41,
                71,
                224,
                197,
                49,
                80,
                200,
                173
            ]
        }
    ],
    errors: [
        {
            code: 6000,
            name: "notAMember",
            msg: "You're not part of the family yet"
        },
        {
            code: 6001,
            name: "alreadyAMember",
            msg: "You're already part of the family"
        },
        {
            code: 6002,
            name: "insufficientBalance",
            msg: "Insufficient balance for this operation"
        },
        {
            code: 6003,
            name: "unauthorized",
            msg: "You don't have permission for this"
        }
    ],
    types: [
        {
            name: "config",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "authority",
                        type: "pubkey"
                    },
                    {
                        name: "memberCount",
                        type: "u64"
                    },
                    {
                        name: "totalFees",
                        type: "u64"
                    },
                    {
                        name: "membershipFee",
                        type: "u64"
                    },
                    {
                        name: "protectionFee",
                        type: "u64"
                    },
                    {
                        name: "bump",
                        type: "u8"
                    }
                ]
            }
        },
        {
            name: "familyJoined",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "member",
                        type: "pubkey"
                    },
                    {
                        name: "memberCount",
                        type: "u64"
                    }
                ]
            }
        },
        {
            name: "memberAccount",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "owner",
                        type: "pubkey"
                    },
                    {
                        name: "joinedAt",
                        type: "i64"
                    },
                    {
                        name: "protectionCount",
                        type: "u64"
                    },
                    {
                        name: "totalContributed",
                        type: "u64"
                    },
                    {
                        name: "bump",
                        type: "u8"
                    }
                ]
            }
        },
        {
            name: "protectionOffered",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "member",
                        type: "pubkey"
                    },
                    {
                        name: "amount",
                        type: "u64"
                    }
                ]
            }
        }
    ]
};
const __TURBOPACK__default__export__ = IDL;
}),
"[project]/mobcheese-solana/app/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@coral-xyz/anchor/dist/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@coral-xyz/anchor/dist/esm/program/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token/lib/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$types$2f$mobcheese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/types/mobcheese.ts [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
;
// Wrapper to handle both sync and async versions
const getAssociatedTokenAddress = async (mint, owner)=>{
    const { getAssociatedTokenAddressSync } = await __turbopack_context__.A("[project]/mobcheese-solana/app/node_modules/@solana/spl-token/lib/esm/index.js [app-ssr] (ecmascript, async loader)");
    return getAssociatedTokenAddressSync(mint, owner);
};
const WalletMultiButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/mobcheese-solana/app/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function Home() {
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const [txSig, setTxSig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
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
            const PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"](programIdStr);
            const MINT = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"](mintStr);
            const TREASURY = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"](treasuryStr);
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, wallet, {
                preflightCommitment: "processed"
            });
            // Use the imported IDL instead of fetching from chain
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Program"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$types$2f$mobcheese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], provider);
            // PDA for membership
            const [memberPDA] = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
                Buffer.from("mobcheese"),
                wallet.publicKey.toBuffer()
            ], PROGRAM_ID);
            // Treasury authority PDA
            const [treasuryAuthority] = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
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
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"],
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemProgram"].programId
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            marginTop: "50px",
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "2.5rem"
                },
                children: "Join the MobCheese Family 🧀"
            }, void 0, false, {
                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "30px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {}, void 0, false, {
                    fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            !isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            marginBottom: "10px",
                            fontSize: "20px"
                        },
                        children: "⚙️ Configuration Required"
                    }, void 0, false, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: "10px"
                        },
                        children: [
                            "To enable the app, create ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "app/.env.local"
                            }, void 0, false, {
                                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                lineNumber: 158,
                                columnNumber: 39
                            }, this),
                            " with:"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
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
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: "10px",
                            fontSize: "14px"
                        },
                        children: [
                            "See ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "DEPLOYMENT.md"
                            }, void 0, false, {
                                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this),
                            " for setup instructions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this),
            wallet.publicKey && isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 194,
                        columnNumber: 13
                    }, this),
                    txSig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px",
                            padding: "20px",
                            background: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "12px",
                            maxWidth: "500px",
                            margin: "20px auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#4caf50",
                                    marginBottom: "10px"
                                },
                                children: "✅ Welcome to the Family!"
                            }, void 0, false, {
                                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            !wallet.publicKey && isConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "white",
                    marginTop: "20px",
                    fontSize: "18px"
                },
                children: "Connect your wallet to join the family"
            }, void 0, false, {
                fileName: "[project]/mobcheese-solana/app/app/page.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mobcheese-solana/app/app/page.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6497e442._.js.map