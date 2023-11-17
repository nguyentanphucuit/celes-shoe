"use client";
import { ITEMS_PER_PAGE, productTemplate } from "@/constants";
import { classNames, includeTexts, sortByKeyOrder } from "@/constants/common";
import { ProductProps } from "@/types";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton";
import { LoadingComp } from "../LoadingComp";
import SearchBarComp from "../SearchBarComp";
import ActionProductModal from "../modals/ActionProductModal";
import PaginationControls from "../pagination/PaginationControls";
import { useApiDataFireStore } from "@/hooks/useApiData";
import { updateAllProducts } from "@/redux/features/productsSlice";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useApiDataFireStore("products");
  dispatch(updateAllProducts({ products }));
  return (
    <>
      <ProductManagement1 />
    </>
  );
};

const ProductManagement1 = () => {
  const products = useSelector((state: any) => state.productsReducer.items);
  const [product, setProduct] = useState<ProductProps>(products[0] ?? {});
  const [listProducts, setListProducts] = useState<ProductProps[]>([]); // [
  const [action, setAction] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const searchParams = useSearchParams();

  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);
  const startIndex = (current_page - 1) * per_page;
  const endIndex = current_page * per_page;

  const listProductsPaginate = listProducts.slice(startIndex, endIndex);

  const handleActionModal = (action: string, id?: string) => {
    setProduct(products.find((product: any) => product.id === id));
    setAction(action);
    setIsOpenModal(true);
  };
  // console.log(products);
  useEffect(() => {
    setListProducts(products);
  }, [products]);

  useEffect(() => {
    setSearchQuery(decodeURI(searchParams.get("q") ?? ""));
    let productsFilter = products.filter((product: any) =>
      includeTexts(product.title, product.category, searchParams.get("q") ?? "")
    );
    if (searchParams.get("sortBy")) {
      const getSortByParams = decodeURI(searchParams.get("sortBy") ?? "");
      const getOrderParams = decodeURI(
        searchParams.get("order") ?? "undefined"
      );
      setSortOrder({ [getSortByParams]: getOrderParams ?? "undefined" });
      productsFilter = sortByKeyOrder(
        [...productsFilter],
        getSortByParams,
        getOrderParams
      );
    }

    setListProducts(productsFilter);
  }, [searchParams]);

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
      sort: true,
      className: "",
      render: (title: string) => <>{title}</>,
    },
    {
      key: "category",
      title: "Category",
      isShow: true,
      sort: true,
      className: "",
      render: (category: string) => <>{category}</>,
    },
    {
      key: "price",
      title: "Price",
      isShow: true,
      sort: true,
      className: "",
      render: (price: string) => <>{price}</>,
    },
    {
      key: "rating",
      title: "Rating",
      isShow: true,
      sort: true,
      className: "",
      render: (rating: string) => <>{rating}</>,
    },
    {
      key: "inStock",
      title: "Status",
      isShow: true,
      sort: true,
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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

        <SearchBarComp
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map(
              (header) =>
                header?.isShow && (
                  <th scope="col" className="sm:px-6 py-3" key={header?.key}>
                    <div className="flex items-center">
                      {typeof header?.title == "string"
                        ? header?.title
                        : header?.title()}
                      {header?.sort && (
                        <CustomSortIcon
                          sortOrder={sortOrder}
                          setSortOrder={setSortOrder}
                          sortKey={header?.key}
                        />
                      )}
                    </div>
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<LoadingComp />}>
            {listProductsPaginate.map((product: any) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {headers.map(
                  (header) =>
                    header?.isShow && (
                      <td
                        key={header?.key + product.id}
                        className={classNames(
                          header?.className,
                          "sm:px-6 py-3"
                        )}>
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
          </Suspense>
        </tbody>
      </table>
      <PaginationControls
        hasNextPage={endIndex < listProducts.length}
        hasPreviousPage={startIndex > 0}
        totalPages={Math.ceil(listProducts.length / per_page)}
        totalResults={listProducts.length}
        startIndex={startIndex}
      />
      <ActionProductModal
        product={product}
        isOpenModal={isOpenModal}
        action={action}
        setIsOpenModal={setIsOpenModal}
      />
    </div>
  );
};

const CustomSortIcon = (props: any) => {
  const { sortOrder, setSortOrder, sortKey } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const handleSort = (value: string) => {
    setSortOrder({ [sortKey]: value });
    params.set("sortBy", `${sortKey}`);
    if (value != "undefined") params.set("order", `${value}`);
    else {
      params.delete("order");
      params.delete("sortBy");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {
        {
          ["undefined"]: (
            <a onClick={() => handleSort("asc")}>
              <svg
                className="w-3 h-3 ml-1.5 text-gray-800 dark:text-white cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
              </svg>
            </a>
          ),
          ["asc"]: (
            <a onClick={() => handleSort("desc")}>
              <svg
                className="w-2 h-2 ml-2 mr-0.5 text-gray-800 dark:text-white cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 10">
                <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z" />
              </svg>
            </a>
          ),
          ["desc"]: (
            <a onClick={() => handleSort("undefined")}>
              <svg
                className="w-2 h-2 ml-2 mr-0.5 text-gray-800 dark:text-white cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 10">
                <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
              </svg>
            </a>
          ),
        }[sortOrder[sortKey] as string]
      }
    </>
  );
};

export default ProductManagement;
