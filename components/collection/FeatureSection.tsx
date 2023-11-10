import { useTranslations } from "next-intl";
import React from "react";

const FeatureSection = () => {
  const t = useTranslations("Home.FeatureSection");
  const data = [
    {
      id: 1,
      title: t("Free Delivery.title"),
      description: t("Free Delivery.description"),
      icon: (
        <svg
          className="w-8 h-8 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.5 10.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 0a2.225 2.225 0 0 0-1.666.75H12m3.5-.75a2.225 2.225 0 0 1 1.666.75H19V7m-7 4V3h5l2 4m-7 4H6.166a2.225 2.225 0 0 0-1.666-.75M12 11V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9h1.834a2.225 2.225 0 0 1 1.666-.75M19 7h-6m-8.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: t("Return & Refund.title"),
      description: t("Return & Refund.description"),
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 11 20">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: t("Member Discount.title"),
      description: t("Member Discount.description"),
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16.5 7A2.5 2.5 0 0 1 19 4.5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2.5a2.5 2.5 0 1 1 0 5V12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.5A2.5 2.5 0 0 1 16.5 7Z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: t("Support 24/7.title"),
      description: t("Support 24/7.description"),
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12.079 4.839a3 3 0 0 0-4.255.1M11 18h1.083A3.916 3.916 0 0 0 16 14.083V7A6 6 0 1 0 4 7v7m7 4v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4V8H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1V8Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-12 divide-x border p-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-center items-center gap-4">
          <div>{item.icon}</div>
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
