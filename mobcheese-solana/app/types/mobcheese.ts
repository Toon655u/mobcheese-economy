/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/mobcheese.json`.
 */
export type Mobcheese = {
  address: "F8MN4tsJWJpRmnBsXZ4i99CkJ9TEWnNsgqqSGJHQdhzz";
  metadata: {
    name: "mobcheese";
    version: "0.1.0";
    spec: "0.1.0";
    description: "MobCheese Economy Program";
  };
  instructions: [
    {
      name: "initialize";
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      accounts: [
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "authority";
          writable: true;
          signer: true;
        },
        {
          name: "mint";
        },
        {
          name: "treasury";
        },
        {
          name: "treasuryAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [116, 114, 101, 97, 115, 117, 114, 121];
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [];
      returns: undefined;
    },
    {
      name: "joinFamily";
      discriminator: [58, 78, 185, 199, 193, 111, 221, 207];
      accounts: [
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "member";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 98, 99, 104, 101, 101, 115, 101];
              },
              {
                kind: "account";
                path: "user";
              }
            ];
          };
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "userTokenAccount";
          writable: true;
        },
        {
          name: "treasury";
          writable: true;
        },
        {
          name: "treasuryAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [116, 114, 101, 97, 115, 117, 114, 121];
              }
            ];
          };
        },
        {
          name: "mint";
        },
        {
          name: "tokenProgram";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [];
      returns: undefined;
    },
    {
      name: "setPause";
      discriminator: [238, 199, 25, 137, 76, 68, 123, 147];
      accounts: [
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "authority";
          signer: true;
        }
      ];
      args: [
        {
          name: "paused";
          type: "bool";
        }
      ];
      returns: undefined;
    },
    {
      name: "updateAuthority";
      discriminator: [32, 46, 64, 28, 149, 75, 243, 88];
      accounts: [
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "authority";
          signer: true;
        }
      ];
      args: [
        {
          name: "newAuthority";
          type: "pubkey";
        }
      ];
      returns: undefined;
    }
  ];
  accounts: [
    {
      name: "mobCheeseMember";
      discriminator: [238, 26, 171, 65, 225, 199, 44, 244];
    },
    {
      name: "programConfig";
      discriminator: [42, 7, 178, 198, 150, 208, 31, 210];
    }
  ];
  events: [];
  errors: [
    {
      code: 6000;
      name: "AlreadyMember";
      msg: "User is already a member";
    },
    {
      code: 6001;
      name: "InvalidTokenAccount";
      msg: "Invalid token account - must be owned by user";
    },
    {
      code: 6002;
      name: "InvalidTokenMint";
      msg: "Invalid token mint - token account must match program mint";
    },
    {
      code: 6003;
      name: "InvalidTreasuryMint";
      msg: "Invalid treasury mint - must match program mint";
    },
    {
      code: 6004;
      name: "InvalidTreasuryOwner";
      msg: "Invalid treasury owner - must be treasury authority PDA";
    },
    {
      code: 6005;
      name: "ProgramPaused";
      msg: "Program is currently paused";
    },
    {
      code: 6006;
      name: "InsufficientTreasuryBalance";
      msg: "Insufficient balance in treasury";
    },
    {
      code: 6007;
      name: "Unauthorized";
      msg: "Unauthorized - only program authority can perform this action";
    },
    {
      code: 6008;
      name: "InvalidMint";
      msg: "Invalid mint - must match program configuration";
    },
    {
      code: 6009;
      name: "InvalidTreasury";
      msg: "Invalid treasury - must match program configuration";
    }
  ];
  types: [
    {
      name: "mobCheeseMember";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "pubkey";
          },
          {
            name: "joinedAt";
            type: "i64";
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "programConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "pubkey";
          },
          {
            name: "mint";
            type: "pubkey";
          },
          {
            name: "treasury";
            type: "pubkey";
          },
          {
            name: "totalMembers";
            type: "u64";
          },
          {
            name: "isPaused";
            type: "bool";
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    }
  ];
};

export const IDL = {
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
      discriminator: [208, 127, 21, 1, 194, 190, 196, 70],
      accounts: [
        {
          name: "config",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103]
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
                value: [116, 114, 101, 97, 115, 117, 114, 121]
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
      discriminator: [134, 225, 43, 49, 109, 190, 250, 41],
      accounts: [
        {
          name: "config",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103]
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
                value: [109, 101, 109, 98, 101, 114]
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
                value: [116, 114, 101, 97, 115, 117, 114, 121]
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
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169
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
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89
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
      discriminator: [37, 106, 85, 98, 183, 146, 47, 96],
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
                value: [109, 101, 109, 98, 101, 114]
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
                value: [116, 114, 101, 97, 115, 117, 114, 121]
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
      discriminator: [155, 12, 170, 156, 236, 247, 208, 220]
    },
    {
      name: "memberAccount",
      discriminator: [181, 75, 213, 54, 123, 241, 124, 250]
    }
  ],
  events: [
    {
      name: "familyJoined",
      discriminator: [75, 56, 201, 78, 63, 76, 158, 123]
    },
    {
      name: "protectionOffered",
      discriminator: [41, 71, 224, 197, 49, 80, 200, 173]
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

export default IDL;
