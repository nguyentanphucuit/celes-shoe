"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./product/ProductCard";
import { ProductProps } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import PaginationControls from "./pagination/PaginationControls";
import { ITEMS_PER_PAGE } from "@/constants";
import { Loading } from "@geist-ui/core";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "@/firebaseConfig";
import { changeImage } from "@/redux/features/productsSlice";
import { useSearchParams } from "next/navigation";

const Collections = () => {
  const data = useAppSelector((state) => state.productsReducer.items);
  const [imageList, setImageList] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  // pagination
  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);

  const startIndex = (current_page - 1) * per_page;
  const endIndex = current_page * per_page;
  const collections = data.slice(startIndex, endIndex);

  const dispatch = useAppDispatch();
  // get image list
  const imageListRef = ref(storage, "products/");
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item, index) => {
        getDownloadURL(item)
          .then((url) => {
            setImageList((prev: any) => [...prev, url]);
            // if (data[index])
            //   dispatch(
            //     changeImage({ productId: data[index].id, newImage: url })
            //   );
          })
          .finally(() => setLoading(false));
      });
    });
  }, []);

  console.log(data);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="home__text-container my-6">
        <h1 className="text-4xl font-extrabold my-2">Shoe Catalogue</h1>
        <p>Explore the shoes you might like</p>
      </div>
      <div className="grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
        {collections.map((shoe: ProductProps) => (
          <ProductCard {...shoe} key={shoe.id} />
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
