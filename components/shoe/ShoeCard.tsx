"use client";

import { ProductProps } from "@/types";
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import Rating from "../Rating";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";

const ShoeCard = ({
  id,
  imageUrl,
  title,
  subtitle,
  price,
  rating,
}: ProductProps) => {
  const itemCard = {
    id,
    imageUrl,
    title,
    subtitle,
    price,
    rating,
  };
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...itemCard }));
  };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          src={imageUrl}
          alt="shoe card"
          width={400}
          height={400}
          className="object-contain rounded-t-lg"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <Rating rating={rating} />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <CustomButton
            handleClick={handleAddToCart}
            containerStyles="btn-add-to-cart"
            title="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
