import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";
import { listProducts } from "@/constants";
import React from "react";

const SkeletonTest = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
      {/* <ProductSkeleton />
      <ProductCard {...listProducts[0]} /> */}
    </div>
  );
};

export default SkeletonTest;
