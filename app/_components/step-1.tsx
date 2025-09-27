import React from 'react'
import { ConnectWallet } from "@/components/wallet/connect-wallet"
import ChainSelector from '@/components/wallet/chain-selector'

export default function Step1() {
  return (
    <div className='space-y-2'>
      <ConnectWallet />
      <ChainSelector />
    </div>
  )
}
