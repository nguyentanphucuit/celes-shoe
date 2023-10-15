import {
  calculateDiscountPrice,
  capitalizeFirstLetter,
  classNames,
} from "@/constants/common";
import { ProductProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import ColorsComponent from "../ColorComponent";
import CustomButton from "../CustomButton";
import { addToCart, changeQuantity } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Rating from "../Rating";
import Link from "next/link";
import { current } from "@reduxjs/toolkit";

const ProductDetailComponent = (props: ProductProps) => {
  const [selectedImage, setSelectedImage] = useState(props.imageUrl);
  const [currentTab, setCurrentTab] = useState("description");
  const [quantity, setQuantity] = useState(props.quantity);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...props }));
  };
  const handleChangeQuantity = (id: string, e: any) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    dispatch(changeQuantity({ id, newQuantity }));
  };
  const handleSelectedTab = (e: any) => {
    console.log(e.target);
  };

  const tabs = [
    {
      name: "description",
      contents: [
        { name: "ScreenDisplay", value: "10.4 inches" },
        { name: "Colors", value: ["Cyan", "Dark Grey", "Orange"] },
        { name: "ScreenResolution", value: "1920 x 1200 Pixels" },
        { name: "Resolution", value: "2000 x 1200" },
        { name: "Processor", value: "2.3 GHz (128 GB)" },
        {
          name: "Graphics",
          value: "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)",
        },
        { name: "WirelessType", value: "802.11a/b/g/n/ac, Bluetooth" },
      ],
    },
    { name: "additional information" },
    { name: "reviews" },
  ];

  const listImgTest = [
    props.imageUrl,
    "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-12.jpg?alt=media&token=82730e1b-b54f-4d53-9741-af858d3dfb82",
    "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-1.jpg?alt=media&token=16396d75-15cf-4714-b9e0-60f0b4c10cc0",
    "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-17.jpg?alt=media&token=b4af70e4-fc43-44d6-8137-9992cc5842de",
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-6 lg:gap-24">
        <div className="grid-cols-4 col-span-2 md:col-span-1">
          <Image
            src={selectedImage}
            width={1000}
            height={100}
            style={{ height: 450 }}
            alt={props.id}
          />
          <div className="grid grid-cols-4 gap-2 py-2">
            {listImgTest.map((url) => (
              <Image
                key={url}
                src={url}
                width={1000}
                height={75}
                style={{ height: 100 }}
                className={classNames(
                  url === selectedImage ? "border-2 border-primary" : "",
                  "cursor-pointer hover:border-2 hover:border-primary"
                )}
                onMouseOver={() => setSelectedImage(url)}
                alt={url}
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Link
            href={`/product?categories=${props.category.toLowerCase()}`}
            className="relative z-10 rounded-md bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {props.category}
          </Link>
          <div className="text-3xl font-semibold">{props.title}</div>
          <Rating rating={props.rating} />
          <p>{props.description}</p>
          <div className="space-x-4 flex items-center">
            <span className="text-lg text-gray-600 line-through">
              ${props.price}{" "}
            </span>
            <span className="text-2xl ">
              ${calculateDiscountPrice(props.price)(props.discount)()}
            </span>
            <span className="inline-flex items-center rounded-md bg-red-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">
              -{props.discount}%
            </span>
          </div>
          <p>Color:</p>
          <ColorsComponent colors={props.colors} productId={props.id} />
          <p>Quantity:</p>
          <select
            id="quantity-0"
            name="quantity-0"
            value={quantity}
            onChange={(e) => handleChangeQuantity(props.id, e)}
            className="hidden lg:block rounded-md bg-gray-50 py-1 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {[...Array(10)].map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <CustomButton
            handleClick={handleAddToCart}
            containerStyles="btn-add-to-cart-full"
            title="Add to Cart"
          />
        </div>
        <div className="col-span-2">
          <div className="text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px justify-center items-center">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  onClick={() => setCurrentTab(tab.name)}
                  className={classNames(
                    currentTab == tab.name
                      ? "border-primary text-black dark:text-gray-300"
                      : "border-transparent text-gray-500 dark:text-gray-400",
                    "mr-2 text-xl inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-primary dark:hover:text-gray-300"
                  )}>
                  {capitalizeFirstLetter(tab.name)}
                </li>
              ))}
            </ul>
          </div>
          <TabContents {...tabs[0]} />
        </div>
      </div>
    </>
  );
};

const TabContents = (props: any) => {
  const content = props.contents;
  return (
    <div className="my-12 px-6 lg:px-24 flex flex-col text-start items-center relative overflow-x-auto">
      <table className="table-fixed border-r border-gray-100">
        <tbody>
          {content.map((item: any) => (
            <tr
              key={item.name}
              className=" border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="w-1/3 px-6 py-4 bg-gray-50 ">{item.name}</td>
              <td className="w-2/3 px-6 py-4">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailComponent;
