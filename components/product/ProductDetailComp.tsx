"use client";
import { alertMessage } from "@/constants";
import { calculateDiscountPrice, classNames } from "@/constants/common";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ProductProps } from "@/types";
import { Grid, Rating, ToastInput, useToasts } from "@geist-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ColorComp from "../ColorComp";
import CustomButton from "../CustomButton";
import RatingComp from "../RatingComp";
import SizeComp from "../SizeComp";

const ProductDetailComponent = (props: ProductProps) => {
  const [selectedImage, setSelectedImage] = useState(props.options[0].imageUrl);
  const [option, setOption] = useState(props?.options[0]);
  const [currentTab, setCurrentTab] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(option?.sizes[0]);
  const { setToast } = useToasts();
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const type = "success" as ToastInput["type"];
    setToast({
      text: alertMessage.success.replace("$action", "added"),
      type,
    });
    dispatch(
      addToCart({
        product: props,
        option: { ...option, sizes: [selectedSize] },
        quantity: quantity,
      })
    );
  };
  const handleChangeQuantity = (id: string, e: any) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
  };
  const handleChangeOption = (option: any) => {
    setOption(option);
    setSelectedSize(option.sizes[0]);
  };

  const tabs = [
    {
      name: "Description",
      title: "Boots",
      subtitle: "Booties",
      contents:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    },
    {
      name: "Additional Information",
      contents: [
        { name: "Screen Display", value: "10.4 inches" },
        { name: "Colors", value: ["Cyan", "Dark Grey", "Orange"] },
        { name: "Screen Resolution", value: "1920 x 1200 Pixels" },
        { name: "Resolution", value: "2000 x 1200" },
        { name: "Processor", value: "2.3 GHz (128 GB)" },
        {
          name: "Graphics",
          value: "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)",
        },
        { name: "Wireless Type", value: "802.11a/b/g/n/ac, Bluetooth" },
      ],
    },
    {
      name: "Reviews",
      reviews: { 1: 17, 2: 70, 3: 140, 4: 296, 5: 1221 },
      totalReviews: 1745,
    },
  ];

  const listImgColors = props.options.map((option) => option.imageUrl);
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
            {listImgColors.map((url) => (
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
        <div className="space-y-6 my-1.5 col-span-2 md:col-span-1">
          <Link
            href={`/product?categories=${props.category.toLowerCase()}`}
            className="relative z-10 rounded-md bg-gray-200 px-3  py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {props.category}
          </Link>
          <div className="text-3xl font-semibold">{props.title}</div>
          <RatingComp rating={props.rating} />
          <p>{props.description}</p>
          <div className="space-x-4 flex items-center">
            <span className="text-lg text-gray-600 line-through">
              ${option.price}{" "}
            </span>
            <span className="text-2xl ">
              ${calculateDiscountPrice(option.price)(option.discount)()}
            </span>
            <span className="inline-flex items-center rounded-md bg-red-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10">
              -{option.discount}%
            </span>
          </div>
          <p>Color:</p>
          <ColorComp
            options={props.options}
            handleChangeOption={handleChangeOption}
          />
          <SizeComp
            option={option}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            type="detail"
          />
          <div className="flex flex-row items-center gap-4">
            <p>Quantity:</p>
            <select
              id="quantity-0"
              name="quantity-0"
              value={quantity}
              onChange={(e) => handleChangeQuantity(props.id, e)}
              className="block rounded-md bg-gray-50 py-1 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {[...Array(10)].map((_, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          {option.inStock ? (
            <CustomButton
              handleClick={handleAddToCart}
              containerStyles="btn-add-to-cart-full"
              title="ADD TO CART"
            />
          ) : (
            <CustomButton
              handleClick={handleAddToCart}
              isDisabled={true}
              containerStyles="w-full px-3 py-2 items-center justify-center border border-transparent bg-gray-900 border-gray-700 text-white text-sm font-medium "
              title="SOLD OUT"
            />
          )}
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
                    "mr-2 text-xl capitalize inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-primary dark:hover:text-gray-300"
                  )}>
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-12 px-6 lg:px-24 ">
            {
              {
                ["Description"]: <Description {...tabs[0]} />,
                ["Additional Information"]: <AdditionalInfo {...tabs[1]} />,
                ["Reviews"]: <Reviews {...tabs[2]} />,
              }[currentTab]
            }
          </div>
        </div>
      </div>
    </>
  );
};

const AdditionalInfo = (props: any) => {
  const content = props.contents;
  return (
    <div className="flex flex-col text-start items-center relative overflow-x-auto">
      <table className="table-fixed w-full border-r border-t border-gray-100">
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

const Description = (props: any) => {
  return (
    <div className="space-y-4 text-start relative overflow-x-auto">
      <div className="text-xl"> {props.title}</div>
      <div className="text-3xl font-bold">{props.subtitle}</div>
      <div className="text-base">{props.contents}</div>
    </div>
  );
};
const Reviews = (props: any) => {
  const [review, setReview] = useState({ rating: 1 });
  const handleReview = (e: any) => {
    setReview({ ...review, [e.target.id]: e.target.value });
  };
  const handleSubmitReview = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="col-span-1 space-y-4">
        <RatingComp rating={4.95} />
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {props.totalReviews} global ratings
        </p>
        {[...Object.keys(props.reviews).reverse()].map(
          (key: any, index: number) => (
            <div key={key} className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                {key} star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{
                    width: `${Math.round(
                      (props.reviews[key] * 100) / props.totalReviews
                    )}%`,
                  }}></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {Math.round((props.reviews[key] * 100) / props.totalReviews)}%
              </span>
            </div>
          )
        )}
        <div className="pt-4 text-2xl font-semibold">Rating & Reviews</div>
        <div>
          <div className="flex items-center mb-4 space-x-4">
            <Image
              width={32}
              height={32}
              style={{ height: 48, width: 48 }}
              className="rounded-full"
              src="/profile.png"
              alt=""
            />
            <div className="space-y-1 text-sm font-medium dark:text-white">
              <RatingComp rating={4} />
              <div>
                Peter Nguyen -{" "}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  06 March, 2023
                </span>
              </div>
              <p className="line-clamp-2 text-gray-500 dark:text-gray-400">
                Designed very similarly to the nearly double priced Boots S6,
                with the only removal being.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 text-md text-gray-600">
        <div className="text-xl">Review this product</div>
        <div>Your email address will not be published.</div>
        <div>
          Your Rating :
          <Grid.Container gap={2} justify="center">
            <Grid xs={24} sm={12} md={8} justify="center">
              <Rating
                type="warning"
                onValueChange={(value) =>
                  setReview({ ...review, rating: value })
                }
              />
            </Grid>
          </Grid.Container>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="review"
              className="block mb-2 text-sm font-medium  dark:text-white">
              Your Review
            </label>
            <textarea
              id="review"
              rows={4}
              cols={4}
              onChange={handleReview}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."></textarea>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleReview}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email address
            </label>
            <input
              type="email"
              id="email"
              onChange={handleReview}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="peter.nguyen@company.com"
              required
            />
          </div>
          <CustomButton
            btnType="submit"
            title="Submit"
            containerStyles="btn-add-to-cart-full"
            handleClick={handleSubmitReview}
          />
        </form>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
