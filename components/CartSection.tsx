"use client";
import { alertMessage } from "@/constants";
import { calculateDiscountPrice } from "@/constants/common";
import { changeQuantity, removeCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { CartProps, ProductProps } from "@/types";
import { ToastInput, useToasts } from "@geist-ui/core";
import Image from "next/image";
import { useState } from "react";

const CartSection = ({ product, option, quantity }: CartProps) => {
  const [_quantity, _setQuantity] = useState(quantity);
  const dispatch = useAppDispatch();
  const { setToast } = useToasts();

  const handleChangeQuantity = (id: string, e: any) => {
    const quantity = Number(e.target.value);
    _setQuantity(quantity);
    dispatch(changeQuantity({ id, option, quantity }));
  };

  const handleRemoveItem = (id: string) => {
    const action = {
      name: "Remove",
      handler: (event: any, cancel: any) => {
        cancel();
        dispatch(removeCart({ id, option }));
      },
    };
    setToast({
      text: alertMessage.warning,
      actions: [action],
      delay: 5000,
    });
  };

  return (
    <li className="flex py-6" key={product.id}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={option.imageUrl}
          width={100}
          height={100}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <div className="flex flex-row gap-2 text-sm justify-center">
            <p>
              <a href="#">{product.title}</a>
            </p>
            <p className="block lg:hidden text-gray-500">
              Color : <b>{option.color.toUpperCase()}</b>
            </p>
            <p className="block lg:hidden text-gray-500">
              Size : <b>{option.color}</b>
            </p>
            <p className="hidden lg:block ml-4 line-through text-gray-400">
              ${option.price}
            </p>
            <p className="hidden lg:block">
              ${calculateDiscountPrice(option.price)(option.discount)()}
            </p>
          </div>

          <select
            id="quantity-0"
            name="quantity-0"
            value={quantity}
            onChange={(e) => handleChangeQuantity(product.id, e)}
            className="hidden lg:block bg-gray-50 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {[...Array(10)].map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <p className="hidden lg:block ml-4">
            ${calculateDiscountPrice(option.price)(option.discount)(quantity)}
          </p>
        </div>
        <p className="hidden lg:block mt-1 text-gray-500">
          Color : {option.color?.toUpperCase()}
        </p>
        <p className="block lg:hidden mt-2">
          ${calculateDiscountPrice(option.price)(option.discount)(quantity)}
        </p>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="hidden lg:block text-gray-500">
            Size : {option.sizes[0].size}
          </p>
          <select
            id="quantity-0"
            name="quantity-0"
            value={quantity}
            onChange={(e) => handleChangeQuantity(product.id, e)}
            className="block lg:hidden w-4/12 bg-gray-50 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {[...Array(10)].map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-primary hover:text-indigo-500"
              onClick={() => handleRemoveItem(product.id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartSection;
