import { erc20ABI } from '@/lib/abis/erc20';
import { vaultABI } from '@/lib/abis/vault';
import { USDC_ADDRESS, VAULT_ADDRESS } from '@/lib/constants';
import { Button } from '@heroui/button';
import { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi'
import { useWaitForTransactionReceipt } from 'wagmi'
import { writeContract } from '@wagmi/core'
import { config } from '@/lib/wagmi';
import Loading from '@/components/loading';

export default function Step5() {
  const [txHashApprove, setTxHashApprove] = useState<string | null>(null)

  const { address } = useAccount()
  const { writeContract: write, isPending, isSuccess, data, isError, error, status } = useWriteContract()
  const result = useWaitForTransactionReceipt({
    hash: txHashApprove as `0x${string}`,
  })

  const handleDeposit = () => {
    write({
      abi: vaultABI,
      address: VAULT_ADDRESS,
      functionName: 'deposit',
      args: [
        8e6,
        address!,
      ],
    })
  }

  const handleApprove = () => {
    write({
      abi: erc20ABI,
      address: USDC_ADDRESS,
      functionName: "approve",
      args: [VAULT_ADDRESS, 10e6]
    })
  }

  const handleApproveAndDeposit = async () => {
    const approve = await writeContract(config, {
      abi: erc20ABI,
      address: USDC_ADDRESS,
      functionName: "approve",
      args: [VAULT_ADDRESS, 10e6]
    })

    setTxHashApprove(approve)

    if (result.isSuccess) {
      await handleDeposit()
    }
  }

  const handleMint = () => {
    write({
      abi: erc20ABI,
      address: USDC_ADDRESS,
      functionName: "mint",
      args: [address, 10e6]
    })
  }

  const handleWithdraw = () => {
    write({
      abi: vaultABI,
      address: VAULT_ADDRESS,
      functionName: "withdraw",
      args: [11006000, address, address]
    })
  }

  // if (isPending) return <Loading />

  return (
    <div className="flex flex-col gap-4 max-w-80 mb-20">
      <p>Status: {status}</p>

      {isSuccess && (
        <div>
          <p>Transaksi berhasil</p>
          <p>Hash: {data}</p>
        </div>
      )}

      {isError && (
        <div>
          <p>Error: {error.message}</p>
        </div>
      )}

      <Button onClick={handleDeposit} color='success' variant='bordered' >
        Deposit
      </Button>

      <Button onClick={handleApprove}>
        Approve 10 USDC
      </Button>

      <Button onClick={handleMint}>
        Mint 10 USDC
      </Button>

      <Button onClick={handleWithdraw}>
        Withdraw
      </Button>

      <Button onClick={handleApproveAndDeposit}>
        Approve and Deposit
      </Button>
    </div>
  );
}
