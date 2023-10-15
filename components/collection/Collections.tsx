"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { ProductProps } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import PaginationControls from "../pagination/PaginationControls";
import { ITEMS_PER_PAGE } from "@/constants";
import { Loading } from "@geist-ui/core";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";
import { changeImage } from "@/redux/features/productsSlice";
import { useSearchParams } from "next/navigation";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";

const Collections = () => {
  // const products = useAppSelector((state) => state.productsReducer.items);
  const [products, setProducts] = useState([] as ProductProps[]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  // pagination
  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);

  const startIndex = (current_page - 1) * per_page;
  const endIndex = current_page * per_page;
  const collections = products.slice(startIndex, endIndex);

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef).finally(() =>
        setIsLoading(false)
      );
      setProducts(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="home__text-container my-6">
        <h1 className="text-4xl font-extrabold my-2">Shoe Catalogue</h1>
        <p>Explore the shoes you might like</p>
      </div>
      <div className="grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
        {collections.map((shoe: ProductProps) => (
          <ProductCard {...shoe} key={shoe.id} isLoading={isLoading} />
        ))}
      </div>

      <PaginationControls
        hasNextPage={endIndex < products.length}
        hasPreviousPage={startIndex > 0}
        totalPages={Math.ceil(products.length / per_page)}
        totalResults={products.length}
        startIndex={startIndex}
      />
    </>
  );
};

export default Collections;

// const imageListRef = ref(storage, "products/");

// const createProduct = async () => {
//   for (let i = 0; i < products.length; i++) {
//     const random = Math.floor(Math.random() * 60);
//     const { id, ...newData } = { ...products[i], discount: random };
//     await addDoc(productsCollectionRef, newData);
//   }
// };

// useEffect(() => {
//   listAll(imageListRef).then((res) => {
//     res.items.forEach((item, index) => {
//       getDownloadURL(item)
//         .then((url) => {
//           setImageList((prev: any) => [...prev, url]);
//           if (data[index])
//             dispatch(
//               changeImage({ productId: data[index].id, newImage: url })
//             );
//         })
//         .finally(() => setIsLoading(false));
//     });
//   });
// }, []);
