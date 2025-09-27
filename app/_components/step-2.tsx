import React from 'react'
import { useAccount, useBalance } from 'wagmi'

export default function Step2() {
  const { address } = useAccount()

  const { data } = useBalance({
    address: address,
    token: "0x058f805D4F91D7b2525bE1A334Be89438A2429Af",
    query: {
      refetchInterval: 2000,
    }
  })

  return (
    <div>
      <p>Balance saya: {data?.formatted}</p>
    </div>
  )
}
