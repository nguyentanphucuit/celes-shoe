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

export interface ProductProps {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  description?: string;
  category?: string;
  imageUrl: string;
  rating: number;
  colors?: any;
  sizes?: any;
}

export interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalPages: number;
  totalResults: number;
  startIndex: number;
}

export interface FiltersProps {
  category: string[];
  color: string[];
  minPrice: number;
  maxPrice: number;
  size: string[];
  text: string;
}
