import { erc20ABI } from '@/lib/abis/erc20';
import { vaultABI } from '@/lib/abis/vault';
import { USDC_ADDRESS, VAULT_ADDRESS } from '@/lib/constants';
import { useAccount, useSimulateContract } from 'wagmi'

export default function Step4() {
  const { address } = useAccount()

  const result = useSimulateContract({
    abi: erc20ABI,
    address: USDC_ADDRESS,
    functionName: "mint",
    args: [address, 10e6]
  })

  return (
    <div className="flex flex-col gap-4">
      {result.isLoading && <p>Loading...</p>}
      {result.error?.message}
      {result.isSuccess && <p>Success</p>}
    </div>
  );
}
