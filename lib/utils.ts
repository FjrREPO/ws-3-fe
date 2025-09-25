export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function formatNumber(
  value: number | string,
  options?: Intl.NumberFormatOptions,
  locale: string = "en-US"
): string {
  if (value === null || value === undefined || value === "") return "0";

  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) return "0";

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  }).format(num);
}
