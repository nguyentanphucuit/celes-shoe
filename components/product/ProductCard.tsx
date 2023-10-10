"use client";

import { ProductProps } from "@/types";
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import Rating from "../Rating";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { isOpenModal } from "@/redux/features/productDetailSlice";
import { useToast } from "../toast/toastService";
import {
  ToastDanger,
  ToastSuccess,
  ToastWarning,
} from "../toast/ToastComponent";
import ColorsComponent from "../ColorsComponent";
import SizesComponent from "../SizesComponent";

const ProductCard = (props: any) => {
  const dispatch = useAppDispatch();

  const toast = useToast() as any;

  const handleAddToCart = () => {
    toast.open(<ToastSuccess />);
    dispatch(addToCart({ ...props }));
  };

  const handleOpenDetail = () => {
    dispatch(isOpenModal({ isOpen: true, item: { ...props } }));
  };
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          src={props.imageUrl}
          alt="shoe card"
          onClick={handleOpenDetail}
          width={400}
          height={400}
          className="object-contain rounded-t-lg"
        />
        <div className="px-5 pb-5">
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          <ColorsComponent colors={props.colors} />
          {/* <SizesComponent sizes={props.sizes} /> */}
          <Rating rating={props.rating} />
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
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
