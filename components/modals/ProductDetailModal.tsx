"use client";

import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Rating from "../Rating";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/hooks";
import { isOpenModal } from "@/redux/features/productDetailSlice";
import CustomButton from "../CustomButton";
import { addToCart } from "@/redux/features/cartSlice";
import ColorsComponent from "../ColorComponent";
import SizeComponent from "../SizeComponent";
import { calculateDiscountPrice } from "@/constants/common";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function ProductDetailModal() {
  const isOpen = useSelector((state: any) => state.productDetailReducer.isOpen);
  const item = useSelector((state: any) => state.productDetailReducer.item);
  const dispatch = useAppDispatch();
  const handleClosedModal = () => {
    dispatch(isOpenModal({ isOpen: false }));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item }));
  };

  return (
    item && (
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
                          src={item.imageUrl}
                          alt={item.title}
                          width={500}
                          height={500}
                          style={{ height: 400 }}
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {item.title}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-2">
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>

                          <div className="space-x-2">
                            <span className="text-xl font-semibold line-through text-gray-500 dark:text-white">
                              ${item.price}
                            </span>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                              $
                              {calculateDiscountPrice(item.price)(
                                item.discount
                              )()}
                            </span>
                          </div>

                          {/* Reviews */}
                          <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            {item.rating && <Rating rating={item.rating} />}
                          </div>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-10">
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>

                          <form>
                            {/* Colors */}
                            <h4 className="text-sm font-medium text-gray-900">
                              Color
                            </h4>
                            <ColorsComponent
                              colors={item.colors}
                              productId={item.id}
                            />

                            {/* Sizes */}
                            <div className="mt-10">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">
                                  Size
                                </h4>
                                <a
                                  href="#"
                                  className="text-sm font-medium text-primary hover:text-indigo-500">
                                  Size guide
                                </a>
                              </div>
                              <SizeComponent
                                sizes={item.sizes}
                                productId={item.id}
                                type="detail"
                              />
                            </div>

                            <CustomButton
                              handleClick={handleAddToCart}
                              containerStyles="btn-add-to-cart-full"
                              title="Add to Cart"
                            />
                          </form>
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
    )
  );
}

export default ProductDetailModal;
