"use client";
import { UserAuth } from "@/app/[locale]/context/AuthContext";
import { ITEMS_PER_PAGE } from "@/constants";
import { classNames, includeTexts, sortByKeyOrder } from "@/constants/common";
import { useApiDataFireStore } from "@/hooks/useApiData";
import { updateAllProducts } from "@/redux/features/productsSlice";
import { ProductProps } from "@/types";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton";
import { LoadingComp, LoadingSpinner } from "../LoadingComp";
import SearchBarComp from "../SearchBarComp";
import ActionProductModal from "../modals/ActionProductModal";
import PaginationControls from "../pagination/PaginationControls";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowsUpDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { user } = UserAuth();
  const [loadingLogin, setLoadingLogin] = useState(true);
  const { data: products, loading, error } = useApiDataFireStore("products");
  dispatch(updateAllProducts({ products }));

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoadingLogin(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <>
      {loadingLogin ? (
        <LoadingSpinner />
      ) : user ? (
        <ProductManagement1 />
      ) : (
        <p>Please login</p>
      )}
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
        "flex w-28 h-28 items-center text-gray-900 whitespace-nowrap dark:text-white",
      render: (image: string) => (
        <Image
          className="object-contain"
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
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button
            className="text-red-500"
            onClick={() => handleActionModal("delete", id)}>
            <TrashIcon className="w-5 h-5" />
          </button>
        </>
      ),
    },
    ,
  ];

  return (
    <div className="relative overflow-x-auto ">
      <div className="flex flex-col space-y-2 items-start md:flex-row md:items-center md:justify-between py-4 px-0.5 bg-white dark:bg-gray-800 ">
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
                  <th scope="col" className="px-6 py-3" key={header?.key}>
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
                        className={classNames(header?.className, "px-6 py-3")}>
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
              <ArrowsUpDownIcon className="w-4 h-4 ml-2 mr-0.5 text-gray-800 dark:text-white cursor-pointer" />
            </a>
          ),
          ["asc"]: (
            <a onClick={() => handleSort("desc")}>
              <ArrowUpIcon className="w-4 h-4 ml-2 mr-0.5 text-gray-800 dark:text-white cursor-pointer" />
            </a>
          ),
          ["desc"]: (
            <a onClick={() => handleSort("undefined")}>
              <ArrowDownIcon className="w-4 h-4 ml-2 mr-0.5 text-gray-800 dark:text-white cursor-pointer" />
            </a>
          ),
        }[sortOrder[sortKey] as string]
      }
    </>
  );
};

export default ProductManagement;
