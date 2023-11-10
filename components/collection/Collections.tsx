"use client";
import { useApiDataFireStore } from "@/app/[locale]/api/useApiData";
import { capitalizeFirstLetter } from "@/constants/common";
import { updateAllColor } from "@/redux/features/colorSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../CustomButton";
import { LoadingComp } from "../LoadingComp";
import ProductCard from "../ProductCard";
import BestSellerSection from "./BestSellerSection";
import PromoSection from "./PromoSection";
import PopularSection from "./PopularSection";
import CategorySection from "./CategorySection";
import TrendingArrivalsSection from "./TrendingArrivalsSection";

const Collections = () => {
  const { data: products, loading, error } = useApiDataFireStore("products");
  const { data: categories } = useApiDataFireStore("categories");
  const { data: colors } = useApiDataFireStore("colors");
  const productsSection = products?.slice(0, 8);
  console.log(colors);
  console.log(products);

  const dispatch = useAppDispatch();
  dispatch(updateAllColor(colors));

  return loading ? (
    <LoadingComp />
  ) : (
    <div className="space-y-16">
      <CategorySection data={categories} />
      <PopularSection data={productsSection} />
      <PromoSection />
      <TrendingArrivalsSection data={productsSection} />
      <BestSellerSection data={productsSection} />
    </div>
  );
};

export default Collections;
