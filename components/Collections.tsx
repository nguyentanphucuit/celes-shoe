"use client";
import React from "react";
import ProductCard from "./product/ProductCard";
import { ProductProps } from "@/types";
import { useAppSelector } from "@/redux/hooks";
import PaginationControls from "./pagination/PaginationControls";
import { ITEMS_PER_PAGE } from "@/constants";

const Collections = ({ searchParams }: { searchParams: any }) => {
  const data = useAppSelector((state) => state.productsReducer.items);

  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);

  const startIndex = (current_page - 1) * per_page;
  const endIndex = current_page * per_page;

  const collections = data.slice(startIndex, endIndex);

  return (
    <>
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Shoe Catalogue</h1>
        <p>Explore the shoes you might like</p>
      </div>
      <div className="grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {collections.map((shoe: ProductProps) => (
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

      <PaginationControls
        hasNextPage={endIndex < data.length}
        hasPreviousPage={startIndex > 0}
        totalPages={Math.ceil(data.length / per_page)}
        totalResults={data.length}
        startIndex={startIndex}
      />
    </>
  );
};

export default Collections;
