"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import Link from "next/link";

const Hero = () => {
  const handleClick = () => {};
  return (
    <div className="hero mt-16 lg:mt-28">
      <div className="bg-slate-400 my-20 py-3 flex flex-col text-center justify-center items-center ">
        <Image
          src="/thumbnail_1.png"
          alt="hero"
          fill
          className="object-cover object-center"
        />
        <div className="hero__title mt-36">WINTER CLEARANCE</div>
        <div className="hero__subtitle">UP TO 200 STYLES ON SALE</div>
        {/* <Link href="https://zalo.me/0905075588">
          <CustomButton
            title="CONTINUE ->"
            containerStyles="px-8 bg-slate-400 text-white border-2 border-white "
            handleClick={handleClick}
          />
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
