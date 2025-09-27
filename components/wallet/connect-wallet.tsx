import * as React from 'react'
import { Connector, useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@heroui/button'

export function ConnectWallet() {
  const { connectors, connect } = useConnect()
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {!isConnected ? (
        <div>
          {connectors.map((connector) => (
            <Button key={connector.uid} onPress={() => connect({ connector })}>
              {connector.name}
            </Button>
          ))}
        </div>
      ) : (
        <div>
          <p>{address}</p>

          <Button onPress={() => disconnect()}>Disconnect</Button>
        </div>
      )}
    </div>
  )
}
