import { ProductProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

const CartCard = ({ ...product }: ProductProps) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleChangeQuantity = (e: any) => {
    setQuantity(e.target.value);
  };

  return (
    <li className="flex py-6" key={product.id}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={product.imageUrl}
          width={100}
          height={100}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{product.title}</a>
            </h3>
            <select
              id="quantity-0"
              name="quantity-0"
              value={quantity}
              onChange={(e) => handleChangeQuantity(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {[...Array(10)].map((_, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <p className="ml-4">${product.price}</p>
            <p className="ml-4">${product.price * quantity}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.subtitle}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Size</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCard;
