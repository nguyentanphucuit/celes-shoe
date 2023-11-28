"use client";

import { isOpenModal } from "@/redux/features/productDetailSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ProductOptionsProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import RatingComp from "./RatingComp";

import { alertMessage } from "@/constants";
import { calculateDiscountPrice, classNames } from "@/constants/common";
import { addToCart } from "@/redux/features/cartSlice";
import { ToastInput, useToasts } from "@geist-ui/core";
import Link from "next/link";
import ColorComp from "./ColorComp";
import ProductSkeleton from "./ProductSkeleton";
import {
  EyeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const ProductCard = (props: any) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productsReducer.items).find(
    (item) => item.id === props.id
  );
  const [option, setOption] = useState(
    product?.options[0] as ProductOptionsProps
  );
  const [selectedSize, setSelectedSize] = useState(option?.sizes[0]);
  const { setToast } = useToasts();
  const handleAddToCart = () => {
    const type = "success" as ToastInput["type"];
    setToast({
      text: alertMessage.success.replace("$action", "added"),
      type,
    });
    dispatch(
      addToCart({
        product: props,
        option: { ...option, sizes: [selectedSize] },
      })
    );
  };
  const handleOpenDetail = () => {
    dispatch(isOpenModal({ isOpen: true, item: { ...props } }));
  };

  const handleChangeOption = (option: any) => {
    setOption(option);
    setSelectedSize(option.sizes[0]);
  };

  return props.loading ? (
    <ProductSkeleton />
  ) : (
    <div className="w-full max-w-sm group relative bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
      <label className="absolute flex justify-center items-center w-12 h-12 top-2 z-10 left-2 p-2 bg-red-500 text-white text-sm rounded-full">
        -{option.discount}%
      </label>
      <div className="relative overflow-hidden">
        <Link href={`/product/${encodeURIComponent(props.id)}`}>
          <Image
            src={option.imageUrl}
            alt="shoe card"
            width={400}
            height={320}
            className="object-cover w-full h-60 cursor-pointer transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div
          className={classNames(
            option.inStock
              ? "invisible bottom-0 group-hover:-translate-y-4"
              : "visible bottom-4",
            "absolute left-0 right-0 w-11/12 m-auto transition duration-300 group-hover:visible"
          )}>
          {option.inStock ? (
            <CustomButton
              handleClick={handleAddToCart}
              containerStyles="w-full px-3 opacity-95 py-2 items-center justify-center border border-transparent bg-indigo-200 border-indigo-400 text-indigo-700 text-sm font-semibold hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              title="ADD TO CART"
            />
          ) : (
            <CustomButton
              handleClick={handleAddToCart}
              isDisabled={true}
              containerStyles="w-full  px-3 py-2 items-center justify-center border border-transparent bg-gray-900 border-gray-700 text-white text-sm font-semibold "
              title="SOLD OUT"
            />
          )}
        </div>
      </div>
      <div
        className={classNames(
          option.inStock ? "group-hover:visible" : " ",
          "absolute invisible top-4 right-0 text-black dark:text-white flex flex-col gap-1 transition group-hover:-translate-x-4 duration-300"
        )}>
        <button className="bg-white p-2 hover:bg-black hover:text-white shadow-lg border border-gray-200">
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
        <button
          className="bg-white p-2 hover:bg-black hover:text-white shadow-lg border border-gray-200"
          onClick={handleOpenDetail}>
          <EyeIcon className="w-6 h-6" />
        </button>
        <button className="bg-white p-2 hover:bg-black hover:text-white shadow-lg border border-gray-200">
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col gap-1.5 px-5 pb-5 pt-1.5 capitalize">
        <div className="flex items-start text-xs">
          <Link
            href={`/product?categories=${props.category.toLowerCase()}`}
            className="relative z-10 rounded bg-gray-200 px-2 py-1 font-medium text-gray-600 hover:bg-gray-300">
            {props.category}
          </Link>
        </div>
        <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <span className="text-sm font-semibold line-through text-gray-500 dark:text-white">
              ${option.price}
            </span>
            <span className="text-md font-bold text-gray-900 dark:text-white">
              ${calculateDiscountPrice(option.price)(option.discount)()}
            </span>
          </div>
          <RatingComp rating={props.rating} type="small" />
        </div>
        <ColorComp
          options={props.options}
          handleChangeOption={handleChangeOption}
          type="small"
        />
      </div>
    </div>
  );
};

export default ProductCard;
