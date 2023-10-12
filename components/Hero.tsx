"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero mt-16 lg:mt-28">
      <div className="bg-slate-400 flex flex-col text-center justify-center items-center ">
        <Image
          src="https://www.famousfootwear.com.au/cdn/shop/files/DESKTOP_WEBSITE_BANNERS_67_2880x.jpg?v=1695621004"
          alt="hero"
          fill
          className="object-cover object-center"
        />
        <div className="hero__title mt-36">WINTER CLEARANCE</div>
        <div className="hero__subtitle">UP TO 200 STYLES ON SALE</div>
        <CustomButton
          title="CONTINUE ->"
          containerStyles="px-8 bg-slate-400 text-white border-2 border-white my-20 py-3"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
