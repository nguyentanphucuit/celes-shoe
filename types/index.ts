import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  leftIcon?: false | boolean;
  rightIcon?: false | boolean;
  isDisabled?: boolean;
  indicatorCount?: number;
}
export interface RatingProps {
  rating: number;
}

export interface ProductOptionsProps {
  price: number;
  discount: number | 0;
  quantity: number;
  imageUrl: string;
  sizes: any;
  color: string;
  inStock: boolean;
}
export interface ProductProps {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  category: string;
  rating: number;
  options: ProductOptionsProps[];
}

export interface CartProps {
  product: ProductProps;
  option: ProductOptionsProps;
  quantity: number;
}

export interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalPages: number;
  totalResults: number;
  startIndex: number;
}

export interface FiltersProps {
  categories: string[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
  sizes: string[];
  text: string;
}

export interface BlogProps {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  contents: string[];
  slug: string;
  featuredImage: string;
}
