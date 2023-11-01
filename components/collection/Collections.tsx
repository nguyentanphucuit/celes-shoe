"use client";
import { ITEMS_PER_PAGE } from "@/constants";
import { capitalizeFirstLetter } from "@/constants/common";
import { useApiDataFireStore } from "@/pages/api/useApiData";
import { ProductProps } from "@/types";
import { Loading } from "@geist-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CustomButton from "../CustomButton";
import ProductCard from "../ProductCard";
import PaginationControls from "../pagination/PaginationControls";
import { updateAllColor } from "@/redux/features/colorSlice";
import { useAppDispatch } from "@/redux/hooks";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useTranslations } from "next-intl";

const Collections = () => {
  const searchParams = useSearchParams();

  // pagination
  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);

  const startIndex = (current_page - 1) * per_page;
  const endIndex = current_page * per_page;

  const { data: products, loading, error } = useApiDataFireStore("products");
  const { data: categories } = useApiDataFireStore("categories");
  const { data: colors } = useApiDataFireStore("colors");
  console.log(colors);
  console.log(products);

  const dispatch = useAppDispatch();
  dispatch(updateAllColor(colors));

  const collections = products.slice(startIndex, endIndex);

  return loading ? (
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
          <ProductCard {...product} key={product.id} loading={loading} />
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
            <ProductCard {...product} key={product.id} loading={loading} />
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
    <div className=" grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
      {props.categories.map((category: any) => (
        <div key={category.id} className="relative overflow-hidden">
          <div className="">
            <Image
              src={category.imageUrl}
              alt={category}
              className="object-cover w-full hover:scale-110 transition duration-500"
              width={500}
              height={500}
              style={{ height: 300 }}
            />
          </div>
          <div className="absolute top-10 left-10 z-10">
            <div className="text-3xl text-gray-800 my-5">
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
