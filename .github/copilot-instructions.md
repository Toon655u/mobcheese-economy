# MobCheese Economy - GitHub Copilot Instructions

## Project Overview

MobCheese is a minimal Solana demo showcasing on-chain membership. Users connect a wallet, join the MobCheese family, and record their membership on Solana with a verifiable transaction viewable on Solscan.

## Technology Stack

- **Frontend Framework**: Next.js (v16.1.6+) with React 18
- **Language**: TypeScript (strict mode disabled in tsconfig)
- **Blockchain**: Solana (using @solana/web3.js and Anchor framework)
- **Wallet Integration**: Solana wallet adapters (@solana/wallet-adapter-*)
- **Package Manager**: npm

## Project Structure

```
mobcheese-economy/
├── .github/              # GitHub configuration and workflows
│   └── workflows/        # CI/CD workflows (CodeQL, Deno)
├── mobcheese-solana/    # Main Solana integration project
│   └── app/             # Next.js frontend application
│       ├── app/         # Next.js app directory (pages and layouts)
│       ├── styles/      # CSS stylesheets
│       └── types/       # TypeScript type definitions
└── README.md
```

## Development Setup

### Prerequisites
- Node.js (latest LTS version)
- npm package manager

### Installation
```bash
cd mobcheese-solana/app
npm install
```

### Running the Application
```bash
cd mobcheese-solana/app
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Coding Standards and Best Practices

### TypeScript
- Use TypeScript for all new code
- Current configuration has `strict: false` - maintain consistency with existing code
- Avoid using `any` type when possible, prefer explicit types
- Use proper types for Solana/Anchor interactions

### React/Next.js
- Follow Next.js App Router conventions (app directory structure)
- Use React 18 features and hooks
- Prefer functional components over class components
- Use proper Next.js optimization features (Image, Link components)

### Solana Integration
- Use @solana/web3.js for blockchain interactions
- Use Anchor framework (@coral-xyz/anchor) for program interactions
- Properly handle wallet connection states
- Use @solana/wallet-adapter components for wallet integration
- Always handle transaction errors gracefully

### Code Style
- Use 2 spaces for indentation (as configured in Next.js defaults)
- Use meaningful variable and function names
- Keep components focused and single-responsibility
- Add comments only when necessary to explain complex logic

### File Naming
- Use kebab-case for files and directories
- Use PascalCase for React components
- Use camelCase for functions and variables

## Testing and CI/CD

### Workflows
- **CodeQL**: Automated security scanning runs on push/PR to main and weekly schedule
- **Deno**: Linting and testing workflow (runs `deno lint` and `deno test -A`)

### Before Submitting PRs
1. Run `npm run lint` to ensure code quality
2. Run `npm run build` to verify the build succeeds
3. Test wallet connection and Solana transactions manually
4. Ensure no TypeScript compilation errors

## Common Tasks

### Adding New Dependencies
```bash
cd mobcheese-solana/app
npm install <package-name>
```

### Modifying Solana Integration
- Check existing types in `types/mobcheese.ts`
- Ensure wallet adapter integration remains functional
- Test on Solana devnet before mainnet

### UI Changes
- Maintain consistency with existing styles
- Consider mobile responsiveness
- Test wallet connection UI flows

## Environment Variables
- See `.env.example` for required environment variables
- Never commit actual `.env` files with secrets
- Use environment variables for RPC endpoints and program IDs

## Security Considerations
- Never expose private keys or seed phrases
- Always validate user inputs
- Use secure RPC endpoints
- Handle wallet connection errors properly
- Validate transaction results before showing success to users

## Additional Notes
- This is a demo/educational project showcasing Solana integration
- Focus on simplicity and clarity over complex optimizations
- Prioritize working code that demonstrates concepts clearly
