import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { useAppSelector } from "@/redux/hooks";
import CartCard from "./CartCard";

const Cart = () => {
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

  const handleHideModal = () => {
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
      <CustomButton
        handleClick={handleShowCartModal}
        containerStyles="btn-add-to-cart"
        title="Cart"
        leftIcon={true}
        indicatorCount={totalQuantity}
      />
      {showCartModal && (
        <>
          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed flex justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Shopping Cart
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                    onClick={handleHideModal}>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  {isEmpty ? (
                    <p>
                      <b>Oops...</b>
                      <br />
                      Your cart is empty !
                    </p>
                  ) : (
                    <div className="-my-6">
                      <ul className="divide-y divide-gray-200">
                        {...cartItem.map((item) => (
                          <CartCard {...item} key={item.id} />
                        ))}
                      </ul>
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
                    containerStyles="btn-checkout"
                    title="Checkout"
                    isDisabled={isEmpty || email === ""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Cart;
