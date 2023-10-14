"use client";

import { ProductProps } from "@/types";
import Image from "next/image";
import React, { use } from "react";
import CustomButton from "../CustomButton";
import Rating from "../Rating";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { isOpenModal } from "@/redux/features/productDetailSlice";

import ColorsComponent from "../ColorComponent";
import SizeComponent from "../SizeComponent";
import { ToastInput, useToasts } from "@geist-ui/core";
import { textAlert } from "@/constants";
import SkeletonProduct from "../SkeletonProduct";
import { calculateDiscountPrice } from "@/constants/common";

const ProductCard = (props: any) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productsReducer.items).find(
    (item) => item.id === props.id
  );
  const { setToast } = useToasts();
  const handleAddToCart = () => {
    const type = "success" as ToastInput["type"];
    setToast({
      text: textAlert.success,
      type,
    });
    dispatch(addToCart({ ...product }));
  };

  const handleOpenDetail = () => {
    dispatch(isOpenModal({ isOpen: true, item: { ...props } }));
  };
  const handleClickImage = (id: string) => {
    console.log(id);
  };

  return props.isLoading ? (
    <SkeletonProduct />
  ) : (
    <div className="w-full max-w-sm group relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <label className="absolute flex justify-center items-center w-12 h-12 top-2 z-10 left-2 p-2 bg-red-500 text-white text-sm rounded-full">
        -{props.discount}%
      </label>
      <div className="overflow-hidden">
        <Image
          src={props.imageUrl}
          alt="shoe card"
          onClick={() => handleClickImage(props.id)}
          width={400}
          height={320}
          className="object-cover w-full h-60 rounded-t-lg cursor-pointer transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute top-4 right-0 text-black dark:text-white flex flex-col gap-1 invisible transition group-hover:-translate-x-4 duration-300 group-hover:visible">
        <button className="bg-white p-2 hover:bg-black hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
        <button
          className="bg-white p-2 hover:bg-black hover:text-white"
          onClick={handleOpenDetail}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
        <button className="bg-white p-2 hover:bg-black hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
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
          <div className="space-x-2">
            <span className="text-base font-semibold line-through text-gray-500 dark:text-white">
              ${props.price}
            </span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${calculateDiscountPrice(props.price)(props.discount)()}
            </span>
          </div>
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

export default ProductCard;
