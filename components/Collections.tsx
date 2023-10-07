"use client";
import React from "react";
import ProductCard from "./product/ProductCard";
import { ProductProps } from "@/types";
import { useAppSelector } from "@/redux/hooks";

const Collections = () => {
  const listCollections = useAppSelector(
    (state) => state.productsReducer.items
  );

  return (
    <>
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Shoe Catalogue</h1>
        <p>Explore the shoes you might like</p>
      </div>
      <div className="grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {listCollections.map((shoe: ProductProps) => (
          <ProductCard
            id={shoe.id}
            key={shoe.id}
            imageUrl={shoe.imageUrl}
            title={shoe.title}
            subtitle={shoe.subtitle}
            quantity={0}
            price={shoe.price}
            rating={shoe.rating}
            colors={[...shoe.colors]}
            sizes={[...shoe.sizes]}
          />
        ))}
      </div>
    </>
  );
};

export default Collections;
