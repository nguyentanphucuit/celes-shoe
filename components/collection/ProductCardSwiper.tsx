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

export default function ProductCardSwiper(props: any) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {props.data?.map((product: ProductProps) => (
          <SwiperSlide>
            <ProductCard {...product} key={product.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
