import { ProductProps } from "@/types";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function calculateTotalPrice(items: ProductProps[]) {
  return items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

export const calculateDiscountPrice =
  (price: number) =>
  (discount: number) =>
  (quantity: number = 1) =>
    +((price - price * (discount / 100)) * quantity).toFixed(2);

export const totalPrice = (cartItem: ProductProps[]) =>
  +cartItem
    .reduce(
      (acc, item) =>
        acc + calculateDiscountPrice(item.price)(item.discount)(item.quantity),
      0
    )
    .toFixed(2);
export const totalQuantity = (cartItem: ProductProps[]) =>
  cartItem.reduce((acc, item) => acc + item.quantity, 0);

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
