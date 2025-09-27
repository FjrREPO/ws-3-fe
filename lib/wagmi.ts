import { createConfig, http } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { injected, metaMask, walletConnect } from 'wagmi/connectors'
import { WALLETCONNECT_PROJECT_ID } from './constants'

export const config = createConfig({
  chains: [baseSepolia, base],
  connectors: [
    injected(),
    walletConnect({ projectId: WALLETCONNECT_PROJECT_ID }),
    metaMask(),
  ],
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
  },
})
