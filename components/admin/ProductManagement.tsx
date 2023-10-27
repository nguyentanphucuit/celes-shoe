import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { classNames } from "@/constants/common";
import EditProductModal from "../modals/EditProductModal";
import { ProductProps } from "@/types";

const ProductManagement = () => {
  const products = useSelector((state: any) => state.productsReducer.items);
  const [product, setProduct] = useState<ProductProps>(products[0] ?? {});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = (id: string) => {
    setProduct(products.find((product: any) => product.id === id));
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
        <button className="text-blue-500" onClick={() => handleOpenModal(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      ),
    },
    ,
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button">
            <span className="sr-only">Action button</span>
            Action
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
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
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header) => (
              <th scope="col" className="sm:px-6 py-3" key={header?.key}>
                {typeof header?.title == "string"
                  ? header?.title
                  : header?.title()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr
              key={product.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {headers.map((header) => (
                <td
                  key={header?.key + product.id}
                  className={classNames(header?.className, "sm:px-6 py-3")}>
                  {header?.render(
                    product[header.key] ??
                      product.options[0][header.key] ??
                      product.id
                  ) ?? <></>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <EditProductModal
        product={product}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </div>
  );
};

export default ProductManagement;