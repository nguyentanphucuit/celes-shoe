import React from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks";
import ProductDetailComponent from "@/components/product/ProductDetailComp";
import { ProductProps } from "@/types";

const ProductDetail = () => {
  const router = useRouter();
  const products = useAppSelector((state) => state.productsReducer.items);

  const currentProduct =
    products.find((product) => product.id == router.query.id) ??
    (products[0] as ProductProps);

  return (
    <div className="mt-32 lg:mt-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <ProductDetailComponent {...currentProduct} />
    </div>
  );
};

export default ProductDetail;
