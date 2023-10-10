import { classNames } from "@/constants/common";
import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

const SizesComponent = (props: any) => {
  const [selectedSize, setSelectedSize] = useState(props.sizes?.[0]);

  return (
    <RadioGroup
      value={selectedSize}
      onChange={setSelectedSize}
      className="mt-4">
      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
      <div className="grid grid-cols-4 gap-4">
        {props.sizes?.map((size: any) => (
          <RadioGroup.Option
            key={size.name}
            value={size}
            disabled={!size.inStock}
            className={({ active }) =>
              classNames(
                size.inStock
                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                active ? "ring-2 ring-indigo-500" : "",
                "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
              )
            }>
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                {size.inStock ? (
                  <span
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-indigo-500" : "border-transparent",
                      "pointer-events-none absolute -inset-px rounded-md"
                    )}
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                    <svg
                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor">
                      <line
                        x1={0}
                        y1={100}
                        x2={100}
                        y2={0}
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </span>
                )}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default SizesComponent;
