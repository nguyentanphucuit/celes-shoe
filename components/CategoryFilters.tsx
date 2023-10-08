"use client";
import React, { Fragment, useState } from "react";
import { FilterSection, FilterSectionRange } from "./FilterSection";
import {
  ITEMS_PER_PAGE,
  listCategories,
  listColors,
  listSizes,
  listSorts,
} from "@/constants";
import { Dialog, Transition } from "@headlessui/react";
import { useAppSelector } from "@/redux/hooks";
import ProductCard from "./product/ProductCard";
import { ProductProps } from "@/types";
import PaginationControls from "./pagination/PaginationControls";
import { useSearchParams } from "next/navigation";

const CategoryFilters = () => {
  const [isExpandSort, setIsExpandSort] = useState(false);
  const [isShowFilters, setIsShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    color: "",
    size: "",
    minPrice: 0,
    category: "",
  });
  const searchParams = useSearchParams();

  const data = useAppSelector((state) => state.productsReducer.items);

  const filterItems = [
    ...data.filter((item) => item.price >= filters.minPrice),
  ];

  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);

  const startIndex = (current_page - 1) * per_page;
  const endIndex = current_page * per_page;

  const listCollections = filterItems.slice(startIndex, endIndex);

  return (
    <div>
      <div className="bg-white">
        <div>
          <Transition.Root show={isShowFilters} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => setIsShowFilters(false)}>
              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full">
                      <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          <div
                            className="relative z-40 lg:hidden"
                            role="dialog"
                            aria-modal="true">
                            <div className="fixed inset-0 z-40 flex">
                              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                  <h2 className="text-lg font-medium text-gray-900">
                                    Filters
                                  </h2>
                                  <button
                                    type="button"
                                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                    onClick={() => setIsShowFilters(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true">
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  </button>
                                </div>

                                {/* Filters  */}
                                <div className="mt-4 border-b border-gray-200">
                                  <h3 className="sr-only">Categories</h3>
                                  <ul
                                    role="list"
                                    className="px-2 py-3 font-medium text-gray-900">
                                    {listCategories.map((category, index) => (
                                      <li key={index}>
                                        <a href="#" className="block px-2 py-3">
                                          {category.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <FilterSectionRange
                                  title="Price"
                                  handleChangeRange={setFilters}
                                />
                                <FilterSection
                                  title="Color"
                                  listFilters={listColors}
                                />
                                <FilterSection
                                  title="Category"
                                  listFilters={listCategories}
                                />
                                <FilterSection
                                  title="Size"
                                  listFilters={listSizes}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Collections
              </h1>

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
                      <svg
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
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
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <span className="sr-only">View grid</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setIsShowFilters(true)}>
                  <span className="sr-only">Filters</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <div className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                    {listCategories.map((category, index) => (
                      <li key={index}>
                        <a href="#">{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  <FilterSectionRange
                    title="Price"
                    handleChangeRange={setFilters}
                  />
                  <FilterSection title="Color" listFilters={listColors} />
                  <FilterSection
                    title="Category"
                    listFilters={listCategories}
                  />
                  <FilterSection title="Size" listFilters={listSizes} />
                </div>
                {/* Product grid */}
                <div className="lg:col-span-3">
                  {filterItems.length === 0 ? (
                    <p className="flex justify-center items-center text-center">
                      Oops...
                      <br />
                      Items not found
                    </p>
                  ) : (
                    <div className="grid grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      {listCollections.map((shoe: ProductProps) => (
                        <ProductCard {...shoe} key={shoe.id} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
            <PaginationControls
              hasNextPage={endIndex < filterItems.length}
              hasPreviousPage={startIndex > 0}
              totalPages={Math.ceil(filterItems.length / per_page)}
              totalResults={filterItems.length}
              startIndex={startIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
