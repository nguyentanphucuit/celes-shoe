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
import Image from "next/image";

const TrendingArrivalsSection = (props: any) => {
  return (
    <div className="xl:mx-32 grid grid-cols-5 gap-12">
      <div className="col-span-5 md:col-span-3">
        <p className="text-base font-medium text-primary">More to Discover</p>
        <h1 className="text-4xl font-bold my-2">Trending Arrivals</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper">
          {props.data?.map((product: ProductProps) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} key={product.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-2 hidden md:block">
        <Image
          src="/trending_section.jpg"
          alt="trending_section"
          width={500}
          height={500}
          style={{ height: 500 }}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default TrendingArrivalsSection;
