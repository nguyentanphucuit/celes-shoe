import { listColors, listFilters } from "@/constants";
import { classNames, getColorVariants } from "@/constants/common";
import { Transition } from "@headlessui/react";
import { constants } from "fs";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

const FilterSection = (props: any) => {
  const [isExpand, setIsExpand] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  const handleFilters = (e: any) => {
    let updatedList = [...props.filters];
    let newPath = `${pathname}?`;
    const value = e.target.value;
    if (e.target.checked) {
      updatedList = [...props.filters, value];
    } else {
      updatedList.splice(props.filters.indexOf(value), 1);
    }
    const params = new URLSearchParams(searchParams);
    updatedList.length > 0
      ? params.set(e.target.name.toLowerCase(), updatedList.join("%"))
      : params.delete(e.target.name.toLowerCase());
    router.push(`${newPath}${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border-b  border-gray-200 py-6">
      <h3 className="lg:mx-0 mx-4 -my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
          onClick={() => setIsExpand(!isExpand)}
          aria-controls="filter-section-0"
          aria-expanded="false">
          <span className="font-medium text-gray-900 capitalize">
            {props.name}
          </span>
          <span className="ml-6 flex items-center">
            {isExpand ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            )}
          </span>
        </button>
      </h3>
      <Transition
        show={isExpand}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div className="pt-4" id="filter-section-0">
          <div className="space-y-4">
            <div
              className={classNames(
                "flex flex-wrap px-4 lg:px-0",
                props.type == "item-circle"
                  ? "flex-row gap-1"
                  : "items-start flex-col"
              )}>
              {props.listOptions.map((item: any, index: number) => (
                <ol key={index} className="list-none mx-0">
                  {props.type == "item-circle" ? (
                    <li>
                      <input
                        type="checkbox"
                        id={item.name.toLowerCase()}
                        name={props.name}
                        value={item.name.toLowerCase()}
                        className="hidden peer"
                        onChange={handleFilters}
                      />
                      <label
                        htmlFor={item.name.toLowerCase()}
                        className="inline-flex items-center justify-between p-0.5 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer peer-checked:border-blue-400 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50">
                        <span
                          aria-hidden="true"
                          className={classNames(
                            getColorVariants(item.name),
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </label>
                    </li>
                  ) : (
                    <div className="flex items-center py-2">
                      <input
                        id={`filter-${props.name}-${index}`}
                        name={props.name}
                        value={item.name}
                        checked={props.filters?.includes(item.name)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-indigo-500"
                        onChange={handleFilters}
                      />
                      <label
                        htmlFor={`filter-${props.name}-${index}`}
                        className="ml-3 capitalize text-sm text-gray-600">
                        {item.name}
                      </label>
                    </div>
                  )}
                </ol>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

const FilterSectionRange = (props: any) => {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  const handleFilters = (e: any) => {
    let newPath = `${pathname}?`;
    const params = new URLSearchParams(searchParams);
    e.target.value.length > 0
      ? params.set(e.target.name, e.target.value)
      : params.delete(e.target.name);
    router.push(`${newPath}${params.toString()}`, { scroll: false });
  };

  return (
    <div className="lg:mx-0 mx-4 capitalize border-b border-gray-200 py-6">
      <h3 className="-mt-3 mb-3 flow-root">
        <span className="font-medium text-gray-900">{props.name}</span>
      </h3>
      <input
        id="minmax-range"
        type="range"
        name={props.name}
        min="0"
        max="999"
        value={props.filters}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handleFilters}
      />
      <h3 className="my-3 flow-root">
        <span className="font-medium text-gray-900">${props.filters}</span>
      </h3>
    </div>
  );
};

export { FilterSection, FilterSectionRange };
