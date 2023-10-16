"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { ProductProps } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import PaginationControls from "../pagination/PaginationControls";
import { ITEMS_PER_PAGE } from "@/constants";
import Image from "next/image";
import { Loading } from "@geist-ui/core";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";
import { changeImage } from "@/redux/features/productsSlice";
import { useSearchParams } from "next/navigation";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import CustomButton from "../CustomButton";
import { capitalizeFirstLetter } from "@/constants/common";
import Link from "next/link";

const Collections = () => {
  // const products = useAppSelector((state) => state.productsReducer.items);
  const [products, setProducts] = useState([] as ProductProps[]);
  const [categories, setCategories] = useState([] as string[]);

  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  // pagination
  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);

  const startIndex = (current_page - 1) * per_page;
  const endIndex = current_page * per_page;
  const collections = products.slice(startIndex, endIndex);

  const productsCollectionRef = collection(db, "products");
  const categoriesCollectionRef = collection(db, "categories");

  useEffect(() => {
    const getProducts = async () => {
      const products = await getDocs(productsCollectionRef).finally(() =>
        setIsLoading(false)
      );
      setProducts(
        products.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      );
    };
    const getCategories = async () => {
      const categories = await getDocs(categoriesCollectionRef);
      setCategories(
        categories.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getProducts();
    getCategories();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <ListCategory categories={categories} />
      <div className="home__text-container my-6">
        <h1 className="text-4xl font-extrabold my-2">Shoe Catalogue</h1>
        <p>Explore the shoes you might like</p>
      </div>
      <div className="grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
        {collections.map((product: ProductProps) => (
          <ProductCard {...product} key={product.id} isLoading={isLoading} />
        ))}
      </div>
      <div className="home__text-container my-6">
        <h1 className="text-4xl font-extrabold my-2">Best Sellers</h1>
        <p>Explore the shoes you might like</p>
      </div>
      <div className="carousel max-w-full carousel-center p-4 space-x-4 bg-gray-100 rounded-box">
        {collections.map((product: ProductProps) => (
          <div
            key={product.id}
            className="carousel-item w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ProductCard {...product} key={product.id} isLoading={isLoading} />
          </div>
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

const ListCategory = (props: any) => {
  return (
    <div className="grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 ">
      {props.categories.map((category: any) => (
        <div key={category.id} className="relative ">
          <Image
            src={category.imageUrl}
            alt={category}
            width={500}
            height={500}
            style={{ height: 300 }}
          />
          <div className="absolute top-10 left-10 z-10">
            <div className="text-3xl text-white my-5">
              {capitalizeFirstLetter(category.name)}
            </div>
            <Link href={`/product/?category=${category.href}`}>
              <CustomButton
                title="Shop Now ->"
                containerStyles="btn-add-to-cart "
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
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
