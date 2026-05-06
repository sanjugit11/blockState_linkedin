import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, polygon, arbitrum, optimism, base } from 'viem/chains'

// Get your projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'b56e18d47c72ab683b10814fe9495694'

if (!projectId) {
  throw new Error('WalletConnect Project ID is not defined. Set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID in your .env.local')
}

export const metadata = {
  name: 'BlockEstate',
  description: 'Invest in Real Estate with Blockchain',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://blockestate.io',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

export const chains = [mainnet, polygon, arbitrum, optimism, base] as const

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
