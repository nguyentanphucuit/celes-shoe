import {
  CurrencyDollarIcon,
  TicketIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import React from "react";

const FeatureSection = () => {
  const t = useTranslations("Home.FeatureSection");
  const data = [
    {
      id: 1,
      title: t("Free Delivery.title"),
      description: t("Free Delivery.description"),
      icon: <TruckIcon />,
    },
    {
      id: 2,
      title: t("Return & Refund.title"),
      description: t("Return & Refund.description"),
      icon: <CurrencyDollarIcon />,
    },
    {
      id: 3,
      title: t("Member Discount.title"),
      description: t("Member Discount.description"),
      icon: <TicketIcon />,
    },
    {
      id: 4,
      title: t("Support 24/7.title"),
      description: t("Support 24/7.description"),
      icon: <WrenchScrewdriverIcon />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:divide-x xl:grid-cols-4 divide-y md:divide-y-0 border">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-center items-center gap-4 p-6">
          <div className="w-8 h-8 text-gray-800 dark:text-white">
            {item.icon}
          </div>
          <div className="capitalize ">
            <p className="text-base font-semibold">{item.title}</p>
            <p className="text-xs">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
