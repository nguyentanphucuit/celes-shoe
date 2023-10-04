import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  leftIcon?: false | boolean;
  rightIcon?: false | boolean;
  isDisable?: boolean;
  indicatorCount?: number;
}

export interface CardTypeProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  price: number;
  rating: number;
}
export interface RatingProps {
  rating: number;
}

export interface ProductProps {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  price: number;
  quantity: number;
  description?: string;
  category?: string;
  imageUrl: string;
  rating: number;
}
