import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { classNames } from "@/constants/common";
import ActionProductModal from "../modals/ActionProductModal";
import { ProductProps } from "@/types";
import CustomButton from "../CustomButton";

const ProductManagement = () => {
  const products = useSelector((state: any) => state.productsReducer.items);
  const [product, setProduct] = useState<ProductProps>(products[0] ?? {});
  const [action, setAction] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleActionModal = (action: string, id?: string) => {
    setProduct(products.find((product: any) => product.id === id));
    setAction(action);
    setIsOpenModal(true);
  };

  const headers = [
    {
      key: "checkBox",
      title: () => (
        <div className="flex items-center">
          <input
            id="checkbox-all-search"
            type="checkbox"
            onChange={() => setSelectAll(!selectAll)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-all-search" className="sr-only">
            checkbox
          </label>
        </div>
      ),
      isShow: true,
      className: "w-4",
      render: () => (
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      ),
    },
    {
      key: "imageUrl",
      title: "image",
      isShow: true,
      className:
        "flex items-center text-gray-900 whitespace-nowrap dark:text-white",
      render: (image: string) => (
        <Image
          className="w-20 h-20"
          src={image}
          alt="product.imageUrl"
          width="80"
          height="80"
        />
      ),
    },
    {
      key: "title",
      title: "Name",
      isShow: true,
      className: "",
      render: (title: string) => <>{title}</>,
    },
    {
      key: "category",
      title: "Category",
      isShow: true,
      className: "",
      render: (category: string) => <>{category}</>,
    },
    {
      key: "price",
      title: "Price",
      isShow: true,
      className: "",
      render: (price: string) => <>{price}</>,
    },
    {
      key: "inStock",
      title: "Status",
      isShow: true,
      className: "",
      render: (inStock: string) => (
        <div className="flex items-center">
          <div
            className={classNames(
              inStock ? "bg-green-500" : "bg-red-500",
              "h-2.5 w-2.5 rounded-full mr-2"
            )}></div>
        </div>
      ),
    },
    {
      key: "action",
      title: "Action",
      isShow: true,
      className: "",
      render: (id: string) => (
        <>
          <button
            className="text-blue-500"
            onClick={() => handleActionModal("edit", id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <button
            className="text-red-500"
            onClick={() => handleActionModal("delete", id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </>
      ),
    },
    ,
  ];

  return (
    <div className="relative overflow-x-auto ">
      <div className="flex items-center justify-between py-4 px-0.5 bg-white dark:bg-gray-800 ">
        <CustomButton
          title="Create Product"
          containerStyles="px-3 py-2 items-center justify-center border border-transparent bg-blue-700 border-blue-400 text-white text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1"
          handleClick={() => handleActionModal("create")}
        />
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>

        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for product"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map(
              (header) =>
                header?.isShow && (
                  <th scope="col" className="sm:px-6 py-3" key={header?.key}>
                    {typeof header?.title == "string"
                      ? header?.title
                      : header?.title()}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr
              key={product.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {headers.map(
                (header) =>
                  header?.isShow && (
                    <td
                      key={header?.key + product.id}
                      className={classNames(header?.className, "sm:px-6 py-3")}>
                      {header?.render(
                        product[header.key] ??
                          product.options[0][header.key] ??
                          product.id
                      ) ?? <></>}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <ActionProductModal
        product={product}
        isOpenModal={isOpenModal}
        action={action}
        setIsOpenModal={setIsOpenModal}
      />
    </div>
  );
};

export default ProductManagement;
