"use client";

import Image from "next/image";

const Hero = () => {
  const handleClick = () => {};
  return (
    <div className="hero mt-28">
      <Image
        src="/thumbnail_1.png"
        alt="hero"
        width={2000}
        height={500}
        className="object-cover object-center"
      />
    </div>
  );
};

export default Hero;
