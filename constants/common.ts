import { CartProps, ProductProps } from "@/types";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const calculateDiscountPrice =
  (price: number) =>
  (discount: number) =>
  (quantity: number = 1) =>
    +((price - price * (discount / 100)) * quantity).toFixed(2);

export const totalPrice = (cartItem: CartProps[]) =>
  +cartItem
    .reduce(
      (acc, item) =>
        acc +
        calculateDiscountPrice(item.option.price)(item.option.discount)(
          item.quantity
        ),
      0
    )
    .toFixed(2);
export const totalQuantity = (cartItem: CartProps[]) =>
  cartItem.reduce((acc, item) => acc + item.quantity, 0);

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// for TailwindCSS
export const getColorVariants = (color: string, type = "bg", shade = 500) =>
  color.toLowerCase() !== "black" &&
  "white" &&
  "inherit" &&
  "current" &&
  "transparent"
    ? [type, color.toLowerCase(), shade].join("-")
    : [type, color.toLowerCase()].join("-");

export const includeTexts = (...args: string[]) => {
  const query = args.pop() ?? "";
  return args.some((text: string) =>
    text.toLowerCase().includes(query.toLowerCase())
  );
};
