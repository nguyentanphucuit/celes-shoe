import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { useAppSelector } from "@/redux/hooks";
import CartCard from "./CartCard";

const Cart = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const counterCart = useAppSelector((state) => state.counterReducer.value);

  const listProducts = [
    {
      id: "0",
      title: "Boots",
      subtitle: "Subtitle",
      price: 10.99,
      quantity: 1,
      rating: 4.1,
      type: "saleBoots",
      imageUrl:
        "https://www.famousfootwear.com.au/cdn/shop/files/1_548b9483-f658-4e94-b3e3-a36b61d0ede6.jpg?v=1689230938",
    },
    {
      id: "1",
      title: "Heels",
      subtitle: "Subtitle",
      price: 12.99,
      quantity: 2,
      rating: 4.6,
      type: "saleHeels",
      imageUrl:
        "https://www.famousfootwear.com.au/cdn/shop/files/2_66570120-3637-44a6-802d-1f619132023a.jpg?v=1689230938",
    },
    {
      id: "2",
      title: "Flats",
      subtitle: "Subtitle",
      price: 14.99,
      quantity: 3,
      rating: 3.3,
      type: "saleFlats",
      imageUrl:
        "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    },
  ];
  const total = listProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleHideModal = () => {
    setShowCartModal(!showCartModal);
  };
  return (
    <>
      <CustomButton
        handleClick={handleShowCartModal}
        containerStyles="btn-add-to-cart"
        title="Cart"
        leftIcon={true}
        indicatorCount={counterCart}
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
                  <div className="-my-6">
                    <ul className="divide-y divide-gray-200">
                      {...listProducts.map((product) => (
                        <CartCard {...product} key={product.id} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <div className="mb-6">
                    <div className="flex justify-between font-bold">
                      <h3>Subtotal</h3>
                      <p>${total}</p>
                    </div>
                    <p className="text-slate-500 text-xs">
                      Shipping and taxes will be calculated at checkout.
                    </p>
                  </div>
                  <button
                    data-modal-hide="defaultModal"
                    type="button"
                    onClick={handleHideModal}
                    className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                    Checkout
                  </button>
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
