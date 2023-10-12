"use client";

import { ProductProps } from "@/types";
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import Rating from "../Rating";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { isOpenModal } from "@/redux/features/productDetailSlice";

import ColorsComponent from "../ColorComponent";
import SizeComponent from "../SizeComponent";
import { ToastInput, useToasts } from "@geist-ui/core";
import { textAlert } from "@/constants";

const ProductCard = (props: any) => {
  const dispatch = useAppDispatch();

  const { setToast } = useToasts();
  const handleAddToCart = () => {
    const type = "success" as ToastInput["type"];
    setToast({
      text: textAlert.success,
      type,
    });
    dispatch(addToCart({ ...props }));
  };

  const handleOpenDetail = () => {
    dispatch(isOpenModal({ isOpen: true, item: { ...props } }));
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition duration-500 hover:scale-105">
        <Image
          src={props.imageUrl}
          alt="shoe card"
          onClick={handleOpenDetail}
          width={400}
          height={400}
          className="object-contain rounded-t-lg cursor-pointer"
        />
        <div className="px-5 pb-5">
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          <ColorsComponent colors={props.colors} productId={props.id} />
          <SizeComponent sizes={props.sizes} productId={props.id} />
          <Rating rating={props.rating} />
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${props.price}
            </span>
            <CustomButton
              handleClick={handleAddToCart}
              containerStyles="btn-add-to-cart"
              title="Add to Cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
