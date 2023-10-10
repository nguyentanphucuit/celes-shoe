import { classNames } from "@/constants/common";
import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

const ColorsComponent = (props: any) => {
  const [selectedColor, setSelectedColor] = useState(props.colors?.[0]);

  return (
    <RadioGroup
      value={selectedColor}
      onChange={setSelectedColor}
      className="mt-4">
      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
      <span className="flex items-center space-x-3">
        {props.colors?.map((color: any) => (
          <RadioGroup.Option
            key={color.name}
            value={color}
            className={({ active, checked }) =>
              classNames(
                color.selectedClass,
                active && checked ? "ring ring-offset-1" : "",
                !active && checked ? "ring-2" : "",
                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
              )
            }>
            <RadioGroup.Label as="span" className="sr-only">
              {color.name}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={classNames(
                color.class,
                "h-8 w-8 rounded-full border border-black border-opacity-10"
              )}
            />
          </RadioGroup.Option>
        ))}
      </span>
    </RadioGroup>
  );
};

export default ColorsComponent;
