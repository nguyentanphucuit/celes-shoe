"use client";

import {
  ITEMS_PER_PAGE,
  listCategories,
  listSizes,
  listSorts,
} from "@/constants";
import { useAppSelector } from "@/redux/hooks";
import { ProductProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { FilterSection, FilterSectionRange } from "./FilterSection";
import PaginationControls from "../pagination/PaginationControls";
import ProductCard from "../ProductCard";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { includeTexts } from "@/constants/common";
import SearchBarComp from "../SearchBarComp";
import { useApiDataFireStore } from "@/hooks/useApiData";
import ProductSkeleton from "../ProductSkeleton";
import { useDispatch } from "react-redux";
import { updateAllProducts } from "@/redux/features/productsSlice";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";

const ProductFilters = () => {
  const [listProducts, setListProducts] = useState([] as ProductProps[]);
  const [isExpandSort, setIsExpandSort] = useState(false);
  const [isShowFilters, setIsShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const filters = {
    minPrice: +(searchParams?.get("minPrice") || 0),
    colors: searchParams?.get("colors")?.split("%") || [],
    categories: searchParams?.get("categories")?.split("%") || [],
    sizes: searchParams?.get("sizes")?.split("%") || [],
  };

  const { data: products, loading, error } = useApiDataFireStore("products");
  const dispatch = useDispatch();

  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);
  const startIndex = (current_page - 1) * per_page;
  const endIndex = current_page * per_page;

  useEffect(() => {
    if (loading) return;
    dispatch(updateAllProducts({ products }));
    setSearchQuery(decodeURI(searchParams.get("q") ?? ""));
    let productsFilter = products.filter((product: any) =>
      includeTexts(product.title, product.category, searchParams.get("q") ?? "")
    );
    const filterItems = [
      ...productsFilter
        .filter((item: any) => item.options[0].price >= filters.minPrice)
        .filter((item: any) => {
          if (filters.colors.length === 0) return true;
          const itemOptions = item.options.filter(
            (option: any) => option.inStock
          );
          const isMatchColor = itemOptions.find((option: any) =>
            filters.colors.includes(option.color.toLowerCase())
          );
          return isMatchColor;
        })
        .filter((item: any) => {
          if (filters.sizes.length === 0) return true;
          const itemOptions = item.options.filter((option: any) => {
            const itemSize = option.sizes.find(
              (size: any) => size.inStock && filters.sizes.includes(size.name)
            );
            return itemSize;
          });
          return itemOptions.length > 0;
        })
        .filter((item: any) => {
          if (filters.categories.length === 0) return true;
          return filters.categories.includes(item.category.toLowerCase());
        })
        .filter((item: any) => {
          if (searchQuery === "") return true;
          return (
            searchQuery &&
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }),
    ];
    setListProducts(filterItems);
  }, [searchParams, loading]);

  const listCollections = listProducts.slice(startIndex, endIndex);

  return (
    <div className="bg-white">
      <Transition.Root show={isShowFilters} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={() => setIsShowFilters(false)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full">
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setIsShowFilters(false)}>
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* Filters  */}
                <form className="mt-4 border-t border-gray-200">
                  <ListFiltersSection filters={filters} />
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="hidden md:block -mt-2 lg:mt-10 lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
            New Collections
          </h1>
          <SearchBarComp
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  onClick={() => setIsExpandSort(!isExpandSort)}
                  id="menu-button"
                  aria-expanded="false"
                  aria-haspopup="true">
                  Sort
                  <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                </button>
              </div>
              <Transition
                show={isExpandSort}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}>
                  <div className="py-1" role="none">
                    {listSorts.map((item, index) => (
                      <a
                        href="#"
                        className="active:font-medium active:text-gray-900 active:bg-gray-100 hover:font-medium hover:text-gray-900 hover:bg-gray-100 text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id={"menu-item-" + index}
                        key={index}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Transition>
            </div>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setIsShowFilters(true)}>
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              <ListFiltersSection filters={filters} />
            </form>
            {/* Product grid */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="grid grid-flow-row justify-center sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {Array.from(Array(6)).map((_, index) => (
                    <ProductSkeleton key={index} />
                  ))}
                </div>
              ) : (
                <>
                  {listProducts.length === 0 ? (
                    <p className="flex justify-center items-center text-center">
                      Oops...
                      <br />
                      Items not found
                    </p>
                  ) : (
                    <div className="grid grid-flow-row justify-center sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {listCollections.map((product: ProductProps) => (
                        <ProductCard {...product} key={product.id} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
        <PaginationControls
          hasNextPage={endIndex < listProducts.length}
          hasPreviousPage={startIndex > 0}
          totalPages={Math.ceil(listProducts.length / per_page)}
          totalResults={listProducts.length}
          startIndex={startIndex}
        />
      </div>
    </div>
  );
};

const ListFiltersSection = (props: any) => {
  const listColors = useAppSelector((state: any) => state.colorReducer.items);
  return (
    <>
      <FilterSectionRange name="minPrice" filters={props.filters.minPrice} />
      <FilterSection
        name="colors"
        type="item-circle"
        listOptions={listColors}
        filters={props.filters.colors}
      />
      <FilterSection
        name="categories"
        listOptions={listCategories}
        filters={props.filters.categories}
      />
      <FilterSection
        name="sizes"
        listOptions={listSizes}
        filters={props.filters.sizes}
      />
    </>
  );
};

export default ProductFilters;
