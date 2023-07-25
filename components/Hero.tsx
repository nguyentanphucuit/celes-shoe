"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="bg-slate-400 flex flex-col text-center justify-center items-center ">
        <div className="hero__title mt-20">WINTER CLEARANCE</div>
        <div className="hero__subtitle">UP TO 200 STYLES ON SALE</div>
        <CustomButton
          title="SHOP CLEARANCE"
          containerStyles="bg-slate-400 text-white border-2 border-white my-20"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
