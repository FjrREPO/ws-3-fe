import { Button } from '@heroui/button'
import React from 'react'
import { useAccount, useSwitchChain } from 'wagmi'

export default function ChainSelector() {
  const { chainId } = useAccount()
  const { chains, switchChain } = useSwitchChain()

  return (
    <div>
      {chains.map((chain) => (
        <Button color={chainId === chain.id ? 'primary' : 'danger'} key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
          {chain.name}
        </Button>
      ))}
    </div>
  )
}
