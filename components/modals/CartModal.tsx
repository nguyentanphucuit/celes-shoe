import { totalPrice, totalQuantity } from "@/constants/common";
import { useAppSelector } from "@/redux/hooks";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import CartSection from "../CartSection";
import CustomButton from "../CustomButton";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

const CartModal = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [email, setEmail] = useState("");
  const cartItem = useAppSelector((state) => state.cartReducer.cart);
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
        totalPrice: totalPrice(cartItem),
        totalQuantity: totalQuantity(cartItem),
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
        totalQuantity={totalQuantity(cartItem)}
      />
      <Transition.Root appear show={showCartModal} as={Fragment}>
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
                    {/* Content modal */}
                    <>
                      <div className="w-full max-h-full">
                        <div className="p-2 lg:p-6 space-y-6">
                          {isEmpty ? (
                            <p>
                              <b>Oops...</b>
                              <br />
                              Your cart is empty !
                            </p>
                          ) : (
                            <div className="-my-6">
                              <ol className="divide-y divide-gray-200 list-none mx-0">
                                {cartItem.map((item) => (
                                  <CartSection
                                    {...item}
                                    key={
                                      item.product.id +
                                      item.option.color +
                                      item.option.sizes[0].name
                                    }
                                  />
                                ))}
                              </ol>
                            </div>
                          )}
                        </div>
                        <div className="p-2 lg:p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <div className="mb-6">
                            <div className="flex justify-between font-bold">
                              <h3>Subtotal</h3>
                              <p>${totalPrice(cartItem)}</p>
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
                                    <EnvelopeIcon className="w-5 h-5 text-gray-500" />
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
                            containerStyles="w-full flex items-center justify-center border border-transparent bg-primary py-3 text-base font-medium text-white shadow-sm enabled:hover:bg-indigo-700"
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
    <button className="relative text-white px-2" onClick={handleShowCartModal}>
      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      {totalQuantity > 0 ? (
        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-gray-800 border-2 border-white rounded-full -top-2 -right-1 dark:border-gray-900">
          {totalQuantity}
        </div>
      ) : null}
    </button>
  );
};

export default CartModal;
