import { listCategories, listSizes } from "@/constants";
import { classNames } from "@/constants/common";
import { updateProduct } from "@/redux/features/productsSlice";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditProductModal = (props: any) => {
  const [inputValue, setInputValue] = useState<{ [key: string]: any }>({});
  const listColorOptions = useSelector(
    (state: any) => state.colorReducer.items
  );
  const listCategoryOptions = [...listCategories];

  const handleClosedModal = () => {
    props.setIsOpenModal(false);
  };

  const headers = [
    { key: "id", title: "ID", type: "input", isDisabled: true },
    { key: "title", title: "Title", type: "input" },
    { key: "subtitle", title: "Subtitle", type: "input" },
    {
      key: "category",
      title: "Category",
      type: "select",
      listOptions: [...listCategoryOptions],
    },
    {
      key: "options",
      title: "Options",
      type: "map",
      listKeys: [
        {
          key: "color",
          title: "Color",
          type: "select",
          listOptions: [...listColorOptions],
        },
        { key: "price", title: "Price", type: "input" },
        {
          key: "discount",
          title: "Discount",
          type: "input",
        },
        {
          key: "imageUrl",
          title: "ImageUrl",
          type: "input",
        },
        {
          key: "quantity",
          title: "Quantity",
          type: "input",
        },
        {
          key: "size",
          title: "Size",
          type: "select",
          listOptions: [...listSizes],
        },
        {
          key: "inStock",
          title: "In Stock",
          type: "select",
          listOptions: [
            { id: "0", name: "true" },
            { id: "1", name: "false" },
          ],
        },
      ],
    },
  ];
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newProduct = { ...props.product, ...inputValue };
    dispatch(updateProduct({ product: newProduct, id: props.product.id }));
    props.setIsOpenModal(false);
  };
  useEffect(() => {
    setInputValue({ ...props.product });
  }, [props.product]);

  return (
    <Transition.Root appear show={props.isOpenModal} as={Fragment}>
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
              <Dialog.Panel className="w-full bg-white transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl rounded-lg">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit product
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleClosedModal}
                    data-modal-hide="editUserModal">
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Content modal */}
                <>
                  <form
                    onSubmit={handleSubmit}
                    className="relative bg-white dark:bg-gray-700">
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-6 gap-6">
                        {headers.map((item, index) => (
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
                                ["map"]: item.listKeys?.map((item, index) => (
                                  <Fragment key={item.key + index}>
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
                                )),
                              }[item.type]
                            }
                          </Fragment>
                        ))}
                        <div className="col-span-6 sm:col-span-3"></div>
                      </div>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Save
                      </button>
                    </div>
                  </form>
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
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
    listOptions.find(
      (option: any) =>
        option.name?.toLowerCase() == inputValue[item.key]?.toLowerCase()
    ) ?? listOptions[0];
  console.log(selected, inputValue[item.key]);
  return (
    <div className="col-span-6 sm:col-span-3">
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
            <span className="block truncate">{selected.name}</span>
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
                        {item.name}
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

export default EditProductModal;
