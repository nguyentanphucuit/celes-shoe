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
