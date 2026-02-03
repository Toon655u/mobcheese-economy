# Copilot Instructions for MobCheese Economy

## Project Overview
MobCheese is a minimal Solana demo showcasing on-chain membership. Users connect a wallet, join the MobCheese family, and record their membership on Solana with a verifiable transaction viewable on Solscan.

## Technology Stack
- **Frontend**: Next.js 16+ with TypeScript and React 18
- **Blockchain**: Solana (devnet) with Anchor framework
- **Wallet Integration**: Solana Wallet Adapter
- **Token Standard**: SPL Token
- **Package Manager**: npm

## Project Structure
```
mobcheese-economy/
├── .github/              # GitHub configuration and workflows
│   └── workflows/        # CI/CD workflows (CodeQL, Deno)
├── mobcheese-solana/
│   └── app/              # Next.js frontend application
│       ├── app/          # Next.js app directory
│       ├── types/        # TypeScript type definitions (Anchor IDL)
│       └── styles/       # CSS styles
└── README.md
```

## Development Commands

### Frontend (Next.js)
All commands should be run from `mobcheese-solana/app/` directory:

- `npm install` - Install dependencies
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linter

### Testing
- `deno test -A` - Run Deno tests (from repository root)
- `deno lint` - Run Deno linter (from repository root)

## Code Style and Conventions

### TypeScript/React
- TypeScript strict mode is disabled (`strict: false` in tsconfig)
- Use functional components with hooks
- Client-side components must include `"use client"` directive
- Use dynamic imports for wallet components (SSR disabled)
- Follow camelCase for variables and functions
- Follow PascalCase for components and types

### Solana Development
- Program ID: `F8MN4tsJWJpRmnBsXZ4i99CkJ9TEWnNsgqqSGJHQdhzz`
- Always use devnet for testing
- Use PDAs (Program Derived Addresses) for accounts:
  - Member PDA: `["mobcheese", user.publicKey]`
  - Config PDA: `["config"]`
  - Treasury Authority PDA: `["treasury"]`
- Import IDL from `types/mobcheese.ts`, not from chain
- Use `@solana/spl-token` for token operations
- Handle wallet connection states properly

### Environment Variables
Configuration is managed through `.env.local` file in the `app/` directory:
- `NEXT_PUBLIC_PROGRAM_ID` - Solana program ID
- `NEXT_PUBLIC_MINT_ADDRESS` - Token mint address
- `NEXT_PUBLIC_TREASURY_ADDRESS` - Treasury token account address

All environment variables for client-side must be prefixed with `NEXT_PUBLIC_`

## Error Handling
- Always catch and handle Solana transaction errors
- Provide user-friendly error messages
- Handle specific error codes:
  - `AlreadyMember` - User is already registered
  - `insufficient funds` - Insufficient SOL for fees
  - `InvalidTokenAccount` - Token account issues

## Security Considerations
- Never commit `.env.local` files (already in .gitignore)
- Validate all user inputs
- Use proper PDA derivation to prevent account substitution attacks
- Check token account ownership before transfers
- Implement proper authority checks in program instructions

## Dependencies
Key dependencies and their purposes:
- `@coral-xyz/anchor` - Anchor framework for Solana
- `@solana/web3.js` - Solana blockchain interaction
- `@solana/wallet-adapter-*` - Wallet connection and UI
- `@solana/spl-token` - SPL token operations
- `next` - React framework with SSR/SSG
- `react` & `react-dom` - UI library

## Build and Deployment
1. Ensure environment variables are configured
2. Run `npm run build` in `mobcheese-solana/app/`
3. Test the build with `npm run start`
4. Deploy to hosting platform (Vercel, etc.)

## CI/CD
- **CodeQL**: Security scanning workflow
- **Deno**: Linting and testing workflow
- Both workflows run on push to `main` and on pull requests

## Common Tasks

### Adding a new instruction to the program
1. Update the Anchor program (Rust code)
2. Rebuild the program and generate new IDL
3. Update `types/mobcheese.ts` with new IDL
4. Update frontend to call new instruction

### Adding a new wallet provider
1. Install the wallet adapter package
2. Add to the wallets array in the wallet context
3. Test wallet connection flow

### Styling changes
- Inline styles are used throughout the app
- Consider extracting to CSS modules if styles grow complex
- Maintain responsive design principles

## Testing Guidelines
- Test wallet connection flow manually
- Test transaction signing and submission
- Verify transaction on Solscan devnet explorer
- Test error states (insufficient funds, already member, etc.)
- Test with different wallet providers

## Important Notes
- This is a demo/educational project
- Uses Solana devnet (not production mainnet)
- Frontend is a single-page application
- No backend server required (all interactions via Solana RPC)
- Transactions are viewable on https://solscan.io/tx/{signature}?cluster=devnet
