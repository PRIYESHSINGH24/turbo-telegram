export const formatcurrency  = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);

}