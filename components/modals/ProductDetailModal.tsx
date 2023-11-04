"use client";

import { alertMessage } from "@/constants";
import { calculateDiscountPrice } from "@/constants/common";
import { addToCart } from "@/redux/features/cartSlice";
import { isOpenModal } from "@/redux/features/productDetailSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ToastInput, useToasts } from "@geist-ui/core";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import ColorComp from "../ColorComp";
import CustomButton from "../CustomButton";
import RatingComp from "../RatingComp";
import SizeComp from "../SizeComp";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function ProductDetailModal() {
  const isOpen = useSelector((state: any) => state.productDetailReducer.isOpen);
  const product = useSelector((state: any) => state.productDetailReducer.item);
  const [option, setOption] = useState(product?.options[0]);
  const [selectedSize, setSelectedSize] = useState(option?.sizes[0]);
  const { setToast } = useToasts();
  const dispatch = useAppDispatch();
  const handleClosedModal = () => {
    dispatch(isOpenModal({ isOpen: false, item: product }));
  };
  const handleAddToCart = () => {
    const type = "success" as ToastInput["type"];
    setToast({
      text: alertMessage.success,
      type,
    });
    dispatch(
      addToCart({
        product: product,
        option: { ...option, sizes: [selectedSize] },
      })
    );
  };
  const handleChangeOption = (option: any) => {
    setOption(option);
    setSelectedSize(option.sizes[0]);
  };
  useEffect(() => {
    setOption(product?.options[0]);
    setSelectedSize(product?.options[0].sizes[0]);
  }, [product]);
  return (
    <Transition.Root appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={handleClosedModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-0"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-lg">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={handleClosedModal}>
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <Image
                        src={option.imageUrl}
                        alt={option.imageUrl}
                        width={500}
                        height={500}
                        style={{ height: 400 }}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className=" sm:col-span-8 lg:col-span-7 flex flex-col gap-2">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {product.title}
                      </h2>
                      <section aria-labelledby="information-heading">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <div className="space-x-2">
                          <span className="text-xl font-semibold line-through text-gray-500 dark:text-white">
                            ${option.price}
                          </span>
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            $
                            {calculateDiscountPrice(option.price)(
                              option.discount
                            )()}
                          </span>
                        </div>

                        {/* Reviews */}
                        <div className="mt-4">
                          <h4 className="sr-only">Reviews</h4>
                          <RatingComp rating={product.rating} />
                        </div>
                      </section>
                      <section aria-labelledby="options-heading">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <div className="flex flex-col gap-4">
                          {/* Colors */}
                          <h4 className="text-sm font-medium text-gray-900">
                            Color
                          </h4>
                          <ColorComp
                            options={product.options}
                            handleChangeOption={handleChangeOption}
                          />

                          {/* Sizes */}
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">
                              Size
                            </h4>
                            <SizeGuide />
                          </div>
                          <SizeComp
                            option={option}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                            type="detail"
                          />
                          {option.inStock ? (
                            <CustomButton
                              handleClick={handleAddToCart}
                              containerStyles="btn-add-to-cart-full"
                              title="Add to Cart"
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
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const SizeGuide = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group `}>
            <a
              href="#"
              className="text-sm font-medium text-primary hover:text-indigo-500">
              Size guide
            </a>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute w-128 -top-24 -right-40 z-10 mt-3 -translate-x-1/2 transform px-4 max-w-3xl sm:px-0 ">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <Image
                  src="/size_guide.png"
                  width={512}
                  height={512}
                  alt="size guide"
                />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ProductDetailModal;
