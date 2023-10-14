export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function calculateDiscountPrice(price: number, discount: number) {
  return +(price - price * (discount / 100)).toFixed(2);
}
