"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { Children } from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  leftIcon,
  rightIcon,
  indicatorCount,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} disabled:opacity-75`}
      onClick={handleClick}>
      {leftIcon && leftIcon}
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && rightIcon}
      {indicatorCount != undefined && (
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
          {indicatorCount}
        </div>
      )}
    </button>
  );
};

export default CustomButton;
