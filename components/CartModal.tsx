import React, { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import CustomButton from "./CustomButton";
import { useAppSelector } from "@/redux/hooks";
import Card from "./Cart";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CartModal = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [email, setEmail] = useState("");
  const cartItem = useAppSelector((state) => state.cartReducer.cart);

  const totalPrice = +cartItem
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const totalQuantity = cartItem.reduce((acc, item) => acc + item.quantity, 0);
  const isEmpty = cartItem.length === 0;

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleClosedModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleCheckout = async () => {
    setShowCartModal(!showCartModal);

    const res = await fetch("http://localhost:3000/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: "Nguyen Tan Phuc",
        subject: "Thank you for your order",
        message: "Check out",
        items: cartItem,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  const handleInputEmail = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <CartIcon
        handleShowCartModal={handleShowCartModal}
        totalQuantity={totalQuantity}
      />
      <Transition.Root appear show={showCartModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClosedModal}>
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
                    {/* Content modal */}
                    <>
                      <div className="w-full max-h-full">
                        <div className="p-6 space-y-6">
                          {isEmpty ? (
                            <p>
                              <b>Oops...</b>
                              <br />
                              Your cart is empty !
                            </p>
                          ) : (
                            <div className="-my-6">
                              <ol className="divide-y divide-gray-200 list-none mx-0">
                                {...cartItem.map((item) => (
                                  <Card {...item} key={item.id} />
                                ))}
                              </ol>
                            </div>
                          )}
                        </div>
                        <div className="p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <div className="mb-6">
                            <div className="flex justify-between font-bold">
                              <h3>Subtotal</h3>
                              <p>${totalPrice}</p>
                            </div>
                            <p className="text-slate-500 text-xs">
                              Shipping and taxes will be calculated at checkout.
                            </p>
                          </div>
                          {!isEmpty && (
                            <div className="mb-3">
                              <label
                                htmlFor="input-group-1"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your Email
                              </label>
                              <div className="flex ">
                                <div className="relative mr-2 w-96">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg
                                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 20 16">
                                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    id="input-group-1"
                                    value={email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@gmail.com"
                                    onChange={handleInputEmail}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                          <CustomButton
                            handleClick={handleCheckout}
                            containerStyles="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white shadow-sm enabled:hover:bg-indigo-700"
                            title="Checkout"
                            isDisabled={isEmpty || email === ""}
                          />
                        </div>
                      </div>
                    </>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export const CartIcon = ({
  handleShowCartModal,
  totalQuantity,
}: {
  handleShowCartModal: any;
  totalQuantity: number;
}) => {
  return (
    <button className="relative text-white " onClick={handleShowCartModal}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 mx-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-800 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
        {totalQuantity}
      </div>
    </button>
  );
};

export default CartModal;
