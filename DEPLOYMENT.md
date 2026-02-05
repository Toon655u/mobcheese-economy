# MobCheese Deployment Guide

This guide explains how to deploy and configure the MobCheese Solana app.

## Prerequisites

- Node.js 18+ installed
- A Solana wallet (Phantom, Solflare, etc.)
- Basic familiarity with Solana development

## Environment Configuration

The app requires environment variables to connect to the Solana program. Follow these steps:

### 1. Create Environment File

Create a file named `.env.local` in the `mobcheese-solana/app/` directory with the following content:

```env
# Solana Network Configuration
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=https://api.devnet.solana.com

# Program Configuration
NEXT_PUBLIC_PROGRAM_ID=F8MN4tsJWJpRmnBsXZ4i99CkJ9TEWnNsgqqSGJHQdhzz
NEXT_PUBLIC_MINT_ADDRESS=<your-mint-address>
NEXT_PUBLIC_TREASURY_ADDRESS=<your-treasury-address>
```

### 2. Configure Your Values

Replace the placeholder values with your actual addresses:

- **NEXT_PUBLIC_PROGRAM_ID**: This is already set to the deployed program ID
- **NEXT_PUBLIC_MINT_ADDRESS**: Your SPL token mint address
- **NEXT_PUBLIC_TREASURY_ADDRESS**: Your treasury token account address

### 3. How to Get Your Addresses

#### Getting the Mint Address

If you haven't created a token yet, you'll need to:

1. Use `spl-token create-token` to create a new token on Solana devnet
2. The command will output your mint address
3. Copy this address to `NEXT_PUBLIC_MINT_ADDRESS`

Example:
```bash
spl-token create-token --url devnet
```

#### Getting the Treasury Address

The treasury address is an Associated Token Account (ATA) for your mint:

1. Create an ATA for the treasury authority
2. The treasury authority PDA is derived from the program using seed "treasury"
3. Use `spl-token create-account` or let the program create it

Example:
```bash
# First, get the treasury authority address (derived PDA)
# Then create an associated token account for it
spl-token create-account <MINT_ADDRESS> --owner <TREASURY_AUTHORITY> --url devnet
```

### 4. Using the .env.example Template

A template file `.env.example` is provided in `mobcheese-solana/app/`. You can copy it:

```bash
cd mobcheese-solana/app
cp .env.example .env.local
# Then edit .env.local with your values
```

## Installation

1. Navigate to the app directory:
```bash
cd mobcheese-solana/app
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Building for Production

To create a production build:
```bash
npm run build
npm start
```

## Deploying to Vercel

This project is configured for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add the environment variables in Vercel's dashboard:
   - Go to Project Settings → Environment Variables
   - Add each `NEXT_PUBLIC_*` variable
4. Deploy

## Testing the App

1. Open the app in your browser
2. Connect a Solana wallet (Phantom, Solflare, etc.)
3. Ensure your wallet is connected to Solana devnet
4. Click "Join the Family" to test the membership transaction
5. View your transaction on [Solscan](https://solscan.io/?cluster=devnet)

## Troubleshooting

### Configuration Warning Appears

If you see a yellow "Configuration Required" warning:
- Verify `.env.local` exists in `mobcheese-solana/app/`
- Ensure you've replaced `<your-mint-address>` and `<your-treasury-address>` with actual values
- Restart the development server after changing environment variables

### Transaction Fails

Common issues:
- **Insufficient SOL**: Ensure your wallet has SOL for transaction fees on devnet
- **Already a Member**: You can only join once per wallet
- **Invalid Token Account**: The token accounts may need to be created first

### Environment Variables Not Loading

- Make sure the file is named exactly `.env.local` (not `.env.local.txt`)
- Restart the Next.js development server after creating/modifying `.env.local`
- Environment variables must start with `NEXT_PUBLIC_` to be accessible in the browser

## Security Notes

- Never commit `.env.local` to version control (it's in `.gitignore`)
- Keep your private keys and sensitive data secure
- The `.env.example` file is safe to commit as it contains no sensitive data

## Support

For issues or questions, please open an issue on the GitHub repository.
