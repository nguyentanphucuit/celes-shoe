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

export const sortByKeyOrder = (arr: any[], key: string, order: string) => {
  if (typeof arr[0][key] === "string") {
    if (order === "desc") {
      return arr.sort((a, b) => {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      });
    } else if (order === "asc") {
      return arr.sort((a, b) => {
        if (b[key] > a[key]) return -1;
        if (b[key] < a[key]) return 1;
        return 0;
      });
    }
  } else if (typeof arr[0][key] === "number") {
    if (order === "desc") {
      return arr.sort((a, b) => b[key] - a[key]);
    } else if (order === "asc") {
      return arr.sort((a, b) => a[key] - b[key]);
    }
  }
  return [...arr];
};
