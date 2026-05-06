'use client'

import React, { ReactNode } from 'react'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { State, WagmiProvider } from 'wagmi'
import { wagmiConfig, projectId, chains } from '@/lib/wagmi-config'

// Initialize Web3Modal once at module level (client-side only)
if (typeof window !== 'undefined') {
  createWeb3Modal({
    wagmiConfig,
    projectId,
    chains,
    enableAnalytics: false,
    themeMode: 'dark',
    themeVariables: {
      '--w3m-color-mix': '#3B82F6',
      '--w3m-color-mix-strength': 30,
      '--w3m-accent': '#3B82F6',
      '--w3m-border-radius-master': '8px',
      '--w3m-font-family': 'inherit',
    },
  })
}

const queryClient = new QueryClient()

interface Web3ProviderProps {
  children: ReactNode
  initialState?: State
}

export function Web3Provider({ children, initialState }: Web3ProviderProps) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
