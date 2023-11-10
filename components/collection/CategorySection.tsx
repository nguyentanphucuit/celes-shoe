import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import Link from "next/link";

const CategorySection = (props: any) => {
  return (
    <div className=" grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
      {props.data.map((category: any) => (
        <div key={category.id} className="relative overflow-hidden">
          <div className="">
            <Image
              src={category.imageUrl}
              alt={category}
              className="object-cover w-full hover:scale-110 transition duration-500"
              width={500}
              height={500}
              style={{ height: 260 }}
            />
          </div>
          <div className="absolute top-10 left-10 z-10">
            <div className="text-3xl capitalize text-gray-800 my-5">
              {category.name}
            </div>
            <Link href={`/product/?category=${category.href}`}>
              <CustomButton
                title="Shop Now ->"
                containerStyles="px-6 py-2 items-center justify-center border bg-transparent border-indigo-400 text-indigo-700 text-sm font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
