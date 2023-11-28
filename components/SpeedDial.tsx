import { classNames } from "@/constants/common";
import { MapPinIcon, PhoneIcon, PlusIcon } from "@heroicons/react/20/solid";
import ZaloIcon from "@/public/icons/zalo.png";
import FacebookIcon from "@/public/icons/facebook.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listSpeedDial = [
    {
      name: "Location",
      svg: <MapPinIcon className="w-6 h-6" aria-hidden="true" fill="#fd3754" />,
      href: "https://maps.app.goo.gl/NUYJSNBKJGwwyXNa7",
    },
    {
      name: "Phone",
      svg: <PhoneIcon className="w-6 h-6" aria-hidden="true" fill="#7DD83B" />,
      href: "tel:+84905075588",
    },
    {
      name: "Facebook",
      svg: (
        <Image priority src={FacebookIcon} width={24} height={24} alt="zalo" />
      ),
      href: "https://www.facebook.com/uyen.nhy.33",
    },
    {
      name: "Zalo",
      svg: <Image priority src={ZaloIcon} width={24} height={24} alt="zalo" />,
      href: "https://zalo.me/0905075588",
    },
  ];
  return (
    <div
      data-dial-init
      className="fixed right-6 bottom-6 group"
      onMouseLeave={() => setIsOpen(false)}>
      <div
        id="speed-dial-menu-default"
        className={classNames(
          "flex flex-col items-center mb-4 space-y-2",
          isOpen ? "" : "hidden"
        )}>
        {listSpeedDial.map((item) => (
          <div key={item.name}>
            <Link href={item.href} target="_blank">
              <button
                type="button"
                data-tooltip-target="tooltip-share"
                data-tooltip-placement="left"
                className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                {item.svg}
                <span className="sr-only">{item.name}</span>
              </button>
            </Link>
            <div
              id="tooltip-share"
              role="tooltip"
              className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              {item.name}
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-default"
        aria-controls="speed-dial-menu-default"
        aria-expanded="false"
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center justify-center text-white bg-indigo-700 rounded-full w-14 h-14 hover:bg-indigo-800 dark:bg-primary dark:hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none dark:focus:ring-indigo-800">
        <PlusIcon
          className="w-6 h-6 transition-transform group-hover:rotate-45"
          aria-hidden="true"
        />
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
