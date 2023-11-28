import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-full animate-pulse max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition duration-500 hover:scale-105">
      <div className="flex h-60 items-center justify-center w-full bg-gray-300 rounded dark:bg-gray-700 ">
        <PhotoIcon className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </div>
      <div className="p-5 space-y-5">
        <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4"></div>
          </h5>
        </a>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-2.5"></div>
        <div className="flex flex-row justify-between">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
