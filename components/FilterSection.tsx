import { Transition } from "@headlessui/react";
import React, { useState } from "react";

const FilterSection = (props: any) => {
  const [isExpand, setIsExpand] = useState(false);
  const [checked, setChecked] = useState<any[]>([]);
  const handleFilters = (e: any) => {
    var updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }

    setChecked(updatedList);
    props.handleFilters({ [e.target.name]: [...updatedList] });
  };

  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="lg:mx-0 mx-4 -my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
          onClick={() => setIsExpand(!isExpand)}
          aria-controls="filter-section-0"
          aria-expanded="false">
          <span className="font-medium text-gray-900">
            {props.name.toUpperCase()}
          </span>
          <span className="ml-6 flex items-center">
            {isExpand ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                  clip-rule="evenodd"
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
        <div className="pt-6" id="filter-section-0">
          <div className="space-y-4">
            {props.listFilters.map((item: any, index: number) => (
              <div className="flex items-center" key={index}>
                <input
                  id="filter-color-0"
                  name={props.name}
                  value={item.name}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  onChange={handleFilters}
                />
                <label
                  htmlFor="filter-color-0"
                  className="ml-3 text-sm text-gray-600">
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

const FilterSectionRange = (props: any) => {
  const [value, setValue] = useState(0);
  const handleFilters = (e: any) => {
    setValue(Number(e.target.value));
    props.handleFilters({ [e.target.name]: Number(e.target.value) });
  };

  return (
    <div className="lg:mx-0 mx-4 border-b border-gray-200 py-6">
      <h3 className="-mt-3 mb-3 flow-root">
        <span className="font-medium text-gray-900">
          {props.name.toUpperCase()}
        </span>
      </h3>
      <input
        id="minmax-range"
        type="range"
        name={props.name}
        min="0"
        max="999"
        value={value}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handleFilters}
      />
      <h3 className="my-3 flow-root">
        <span className="font-medium text-gray-900">${value}</span>
      </h3>
    </div>
  );
};

export { FilterSection, FilterSectionRange };
