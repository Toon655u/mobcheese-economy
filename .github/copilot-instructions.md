# MobCheese Economy - Copilot Instructions

## Project Overview

MobCheese is a minimal Solana blockchain demo application showcasing on-chain membership functionality. Users can connect their Solana wallet, join the MobCheese family, and record their membership on the Solana blockchain with a verifiable transaction viewable on Solscan.

### Key Features
- Solana wallet integration using Phantom and other Solana wallets
- On-chain membership registration using Anchor programs
- Token-based membership system with SPL tokens
- Transaction tracking and verification on Solscan

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Solana Web3.js** - Solana blockchain interaction
- **@solana/wallet-adapter** - Wallet connection and management
- **@coral-xyz/anchor** - Solana program client framework

### Backend/Blockchain
- **Solana** - Layer 1 blockchain (DevNet for development)
- **Anchor Framework** - Solana smart contract framework
- **SPL Token** - Solana token standard

### Testing & CI
- **Deno** - Runtime for backend testing
- **GitHub Actions** - CI/CD with CodeQL security scanning

## Project Structure

```
mobcheese-economy/
├── .github/
│   └── workflows/          # CI/CD workflows (Deno tests, CodeQL)
├── mobcheese-solana/
│   └── app/               # Next.js frontend application
│       ├── app/           # Next.js App Router pages
│       ├── types/         # TypeScript types and IDL definitions
│       └── styles/        # CSS styling
└── README.md
```

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- Enable strict mode where possible (current config has `strict: false` but prefer stricter typing in new code)
- Define proper types for Solana/Anchor interactions
- Use explicit return types for functions that interact with the blockchain

### React/Next.js
- Use **functional components** with hooks
- Use **"use client"** directive for client-side components that need browser APIs or hooks
- Use **dynamic imports** for wallet components to avoid SSR issues
- Prefer **async/await** over promise chains
- Handle errors gracefully with user-friendly messages

### Solana/Web3
- Always validate wallet connection before transactions
- Use PDAs (Program Derived Addresses) for deterministic account generation
- Include proper error handling for blockchain transactions
- Use environment variables for program IDs, mint addresses, and treasury addresses
- Never hardcode private keys or sensitive data

### File Naming
- Use kebab-case for files: `my-component.tsx`
- Use PascalCase for component names: `MyComponent`
- Use camelCase for variables and functions

## Common Patterns

### Wallet Integration
```typescript
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Always check wallet connection
if (!wallet.publicKey) {
  setError("Please connect your wallet first!");
  return;
}
```

### Anchor Program Interaction
```typescript
import * as anchor from "@coral-xyz/anchor";
import type { Mobcheese } from "../types/mobcheese";

// Use AnchorProvider for connecting wallet to program
const provider = new anchor.AnchorProvider(connection, wallet as any, {
  preflightCommitment: "processed",
});

// Create program instance with imported IDL
const program = new anchor.Program<Mobcheese>(IDL, provider);
```

### PDA Derivation
```typescript
// Use consistent seeds for PDA generation
const [memberPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("mobcheese"), wallet.publicKey.toBuffer()],
  PROGRAM_ID
);
```

### Error Handling
```typescript
try {
  // Transaction logic
  const tx = await program.methods.joinFamily()
    .accounts({ /* ... */ })
    .rpc();
  setTxSig(tx);
} catch (err: any) {
  // Handle specific Anchor errors
  if (err.toString().includes("AlreadyMember")) {
    setError("You are already a member!");
  } else if (err.toString().includes("insufficient funds")) {
    setError("Insufficient SOL for transaction fees");
  } else {
    setError(err.message || "Transaction failed");
  }
}
```

## Anti-patterns to Avoid

- ❌ Don't use class components (use functional components with hooks)
- ❌ Don't commit `.env.local` files (use `.env.example` for templates)
- ❌ Don't hardcode program IDs, addresses, or keys (use environment variables)
- ❌ Don't skip wallet connection validation before transactions
- ❌ Don't ignore blockchain transaction errors
- ❌ Don't commit `node_modules/` or `.next/` build artifacts
- ❌ Don't use server-side rendering for wallet components (use dynamic imports with `{ ssr: false }`)

## Environment Variables

All environment-specific configuration should use Next.js environment variables:

```env
NEXT_PUBLIC_PROGRAM_ID=<your-program-id>
NEXT_PUBLIC_MINT_ADDRESS=<your-mint-address>
NEXT_PUBLIC_TREASURY_ADDRESS=<your-treasury-address>
```

- Use `NEXT_PUBLIC_` prefix for client-side accessible variables
- Provide `.env.example` with template values
- Never commit actual `.env.local` files

## Testing

### Backend Testing
- Use **Deno** for backend/integration tests
- Run tests with: `deno test -A`
- Run linting with: `deno lint`

### Frontend Testing
- Use Next.js built-in linting: `npm run lint`
- Build verification: `npm run build`

## Security Considerations

### Blockchain Security
- Validate all user inputs before creating transactions
- Check account ownership and signatures
- Use proper PDA derivation to prevent account confusion
- Handle transaction failures gracefully
- Never expose private keys or seed phrases

### Web Security
- Sanitize user inputs
- Use HTTPS in production
- Validate environment configuration before processing transactions
- Display clear error messages without exposing sensitive details

### CodeQL
- CI includes CodeQL scanning for security vulnerabilities
- Address any security findings before merging

## Development Workflow

1. **Setup**: Install dependencies with `npm install` in `mobcheese-solana/app/`
2. **Development**: Run `npm run dev` for local development server
3. **Linting**: Run `npm run lint` and `deno lint` before committing
4. **Testing**: Run `deno test -A` for backend tests
5. **Building**: Run `npm run build` to verify production build
6. **CI/CD**: All PRs run Deno tests and CodeQL security scans

## Best Practices

### Code Quality
- Write self-documenting code with clear variable names
- Add comments for complex blockchain logic
- Keep functions small and focused
- Use TypeScript types to prevent runtime errors

### Git Workflow
- Write clear, descriptive commit messages
- Keep commits focused on single changes
- Use `.gitignore` to exclude build artifacts and dependencies

### Performance
- Use dynamic imports for heavy wallet libraries
- Minimize unnecessary re-renders with proper React hooks usage
- Handle loading states for async blockchain operations

## Resources

- [Solana Documentation](https://docs.solana.com/)
- [Anchor Framework](https://www.anchor-lang.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter)
