"use client";
import { useApiDataFireStore } from "@/app/[locale]/api/useApiData";
import { updateAllColor } from "@/redux/features/colorSlice";
import { useAppDispatch } from "@/redux/hooks";
import { LoadingComp } from "../LoadingComp";
import BestSellerSection from "./BestSellerSection";
import CategorySection from "./CategorySection";
import FeatureSection from "./FeatureSection";
import PopularSection from "./PopularSection";
import PromoSection from "./PromoSection";
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
      <FeatureSection />
    </div>
  );
};

export default Collections;
