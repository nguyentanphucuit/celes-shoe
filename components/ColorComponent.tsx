import { classNames, getColorVariants } from "@/constants/common";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
const ColorComponent = (props: any) => {
  const [selectedColor, setSelectedColor] = useState(props.options[0]);
  const handleChangeColor = (color: any) => {
    setSelectedColor(color);
    props.handleChangeOption(color);
  };

  return (
    <RadioGroup
      value={selectedColor}
      onChange={handleChangeColor}
      className="mt-4">
      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
      <span className="flex items-center space-x-3">
        {props.options?.map((option: any) => (
          <RadioGroup.Option
            key={option.color}
            value={option}
            className={({ active, checked }) =>
              classNames(
                option.color,
                active && checked ? "ring ring-offset-1" : "",
                !active && checked ? "ring-2" : "",
                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
              )
            }>
            <RadioGroup.Label as="span" className="sr-only">
              {option.color}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={classNames(
                getColorVariants(option.color),
                "h-8 w-8 rounded-full border border-black border-opacity-10"
              )}
            />
          </RadioGroup.Option>
        ))}
      </span>
    </RadioGroup>
  );
};

export default ColorComponent;
