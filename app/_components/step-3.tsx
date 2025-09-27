import { erc20ABI } from '@/lib/abis/erc20'
import { useAccount, useReadContract } from 'wagmi'
import { formatUnits } from 'viem'
import { vaultABI } from '@/lib/abis/vault'
import { USDC_ADDRESS, VAULT_ADDRESS } from '@/lib/constants'

export default function Step3() {
  const { address } = useAccount()

  const result = useReadContract({
    abi: vaultABI,
    address: "0x3BD44226D4f6D48e1faA5327F332aA4C004D3249",
    functionName: "balanceOf",
    args: [address!],
    query: {
      refetchInterval: 2000,
    }
  })

  const resultAllowance = useReadContract({
    abi: erc20ABI,
    address: USDC_ADDRESS,
    functionName: "allowance",
    args: [address, VAULT_ADDRESS],
    query: {
      refetchInterval: 2000,
    }
  })

  return (
    <div className='flex flex-col gap-2'>
      <p>Balance saya: {String(result.data ?? 0)}</p>
      <p>Balance saya: {formatUnits((result.data as bigint) ?? BigInt(0), 6)}</p>
      <p>Allowance saya: {formatUnits((resultAllowance.data as bigint) ?? BigInt(0), 6)}</p>
    </div>
  )
}
