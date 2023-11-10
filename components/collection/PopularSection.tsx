import React from "react";
import ProductCard from "../ProductCard";
import { ProductProps } from "@/types";

const PopularSection = (props: any) => {
  return (
    <div>
      <div className="home__text-container my-6">
        <div>
          <p className="text-base font-medium text-primary">Shoe by Category</p>
          <h1 className="text-4xl font-bold my-2">
            Popular on the Celes store.
          </h1>
        </div>
      </div>
      <div className="grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-6">
        {props.data.map((product: ProductProps) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
