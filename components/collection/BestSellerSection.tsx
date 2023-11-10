import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";
import { ProductProps } from "@/types";
import CustomButton from "../CustomButton";
import Link from "next/link";

export default function BestSellerSection(props: any) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-base font-medium text-primary">Shop by Category</p>
          <h1 className="text-4xl font-bold my-2">Best sellers</h1>
        </div>
        <Link href="/product">
          <CustomButton
            title="Shop All Products ->"
            containerStyles="px-6 py-2 items-center justify-center border bg-indigo-200 border-transparent text-indigo-700 text-sm font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          />
        </Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {props.data?.map((product: ProductProps) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} key={product.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
