import {
  alertMessage,
  genericProducts,
  genericProducts_option,
  productTemplate,
} from "@/constants";
import { classNames } from "@/constants/common";
import {
  addProductFireStore,
  deleteProductFireStore,
  editProductFireStore,
} from "@/app/[locale]/api/useApiData";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "@/redux/features/productsSlice";
import { Disclosure, Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../CustomButton";
import CustomModal from "./CustomModal";

const ActionProductModal = (props: any) => {
  const [inputValue, setInputValue] = useState<{ [key: string]: any }>({
    ...productTemplate,
  });

  const handleClosedModal = () => {
    props.setIsOpenModal(false);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {};
  const handleAddProduct = (e: any) => {
    e.preventDefault();
    addProductFireStore("products", { ...inputValue });
    dispatch(addProduct({ ...inputValue }));
    props.setIsOpenModal(false);
  };
  const handleEditProduct = (e: any) => {
    e.preventDefault();
    const newProduct = { ...props.product, ...inputValue };
    editProductFireStore("products", newProduct, props.product.id);
    dispatch(updateProduct({ product: newProduct, id: props.product.id }));
    props.setIsOpenModal(false);
  };
  const handleDeleteProduct = (e: any) => {
    e.preventDefault();
    deleteProductFireStore("products", props.product.id);
    dispatch(deleteProduct({ id: props.product.id }));
    props.setIsOpenModal(false);
  };
  useEffect(() => {
    if (props.action === "edit") setInputValue({ ...props.product });
  }, [props.product]);

  return (
    <CustomModal
      handleClosedModal={handleClosedModal}
      isOpenModal={props.isOpenModal}
      title={props.action + " Product"}>
      <form
        onSubmit={
          {
            ["create"]: handleAddProduct,
            ["edit"]: handleEditProduct,
            ["delete"]: handleDeleteProduct,
          }[props.action as string] ?? (() => {})
        }
        className="relative bg-white dark:bg-gray-700 ">
        <div className="p-3 space-y-6 max-h-[70vh] overflow-y-auto">
          {props.action === "delete" ? (
            <DeleteProductModal />
          ) : (
            <>
              <div className="grid grid-cols-6 gap-6">
                {genericProducts.map((item, index) => (
                  <Fragment key={index}>
                    {
                      {
                        ["input"]: (
                          <CustomInput
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            item={item}
                          />
                        ),
                        ["select"]: (
                          <CustomListbox
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            listOptions={item.listOptions}
                            item={item}
                          />
                        ),
                      }[item.type]
                    }
                  </Fragment>
                ))}
              </div>
              {inputValue.options?.map((option: any, optionIdx: number) => (
                <Disclosure key={option + optionIdx}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{option.color}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <div className="grid grid-cols-6 gap-6">
                          {genericProducts_option.map((item, itemIdx) => (
                            <Fragment key={option + item + itemIdx}>
                              {
                                {
                                  ["input"]: (
                                    <CustomInput
                                      inputValue={
                                        inputValue.options?.[optionIdx]
                                      }
                                      setInputValue={(value: any) => {
                                        const newOptions =
                                          inputValue.options.map(
                                            (item: any, index: number) => {
                                              if (index === optionIdx) {
                                                return { ...value };
                                              }
                                              return item;
                                            }
                                          );
                                        setInputValue({
                                          ...inputValue,
                                          options: newOptions,
                                        });
                                      }}
                                      item={item}
                                    />
                                  ),
                                  ["select"]: (
                                    <CustomListbox
                                      inputValue={
                                        inputValue.options?.[optionIdx]
                                      }
                                      setInputValue={(value: any) => {
                                        const newOptions =
                                          inputValue.options.map(
                                            (item: any, index: number) => {
                                              if (index === optionIdx) {
                                                return { ...value };
                                              }
                                              return item;
                                            }
                                          );
                                        setInputValue({
                                          ...inputValue,
                                          options: newOptions,
                                        });
                                      }}
                                      listOptions={item.listOptions}
                                      item={item}
                                    />
                                  ),
                                }[item.type]
                              }
                            </Fragment>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </>
          )}
        </div>
        <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <CustomButton
            title={
              {
                ["create"]: "Create",
                ["edit"]: "Save",
                ["delete"]: "Delete",
              }[props.action as string] ?? ""
            }
            btnType="submit"
            containerStyles={classNames(
              props.action === "delete"
                ? "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            )}
          />
        </div>
      </form>
    </CustomModal>
  );
};

const DeleteProductModal = (props: any) => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <svg
          className="h-6 w-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>
      <span className="text-sm text-gray-500">{alertMessage.warning}</span>
    </div>
  );
};

const CustomInput = (props: any) => {
  const { item, inputValue, setInputValue } = props;
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor={item.key}
        className="block mb-2 uppercase text-sm font-medium text-gray-900 dark:text-white">
        {item.key}
      </label>
      <input
        disabled={item.isDisabled}
        type="text"
        name={item.key}
        value={inputValue[item.key] || ""}
        id={item.key}
        className={classNames(
          item.isDisabled ? "bg-gray-200" : "bg-gray-50",
          "shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        )}
        placeholder={item.key}
        onChange={(e) =>
          setInputValue({ ...inputValue, [e.target.name]: e.target.value })
        }
        required
      />
    </div>
  );
};

const CustomListbox = (props: any) => {
  const { item, inputValue, setInputValue, listOptions } = props;
  const selected =
    listOptions.find((option: any) => {
      return option.name === inputValue[item.key];
    }) ?? listOptions[0];
  return (
    <div className="col-span-6 sm:col-span-3" key={item}>
      <label
        htmlFor={item.key}
        className="block mb-2 uppercase text-sm font-medium text-gray-900 dark:text-white">
        {item.key}
      </label>
      <Listbox
        value={selected}
        onChange={(selected: any) =>
          setInputValue({ ...inputValue, [item.key]: selected.name })
        }>
        <div className="relative mt-1">
          <Listbox.Button className="capitalize relative w-full cursor-default rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{`${selected.name}`}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute capitalize mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {listOptions.map((item: any, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={item}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {`${item.name}`}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ActionProductModal;
