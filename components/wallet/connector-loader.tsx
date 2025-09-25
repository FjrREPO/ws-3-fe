import { Skeleton } from "@heroui/skeleton";

export function ConnectorLoader() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-80">
      {Array.from({ length: 3 }, (_, i) => (
        <Skeleton key={i} className="h-10 w-full rounded-lg" />
      ))}
    </div>
  );
}

export function AccountLoader() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-80">
      {Array.from({ length: 2 }, (_, i) => (
        <Skeleton key={i} className="h-14 w-full rounded-lg" />
      ))}
    </div>
  );
}
