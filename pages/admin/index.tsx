import ProductManagement from "@/components/admin/ProductManagement";
import { GetStaticPropsContext } from "next";
import React from "react";

const Management = () => {
  return (
    <div className="mt-32 lg:mt-40 mx-auto max-w-7xl px-4 sm:px-6 l:px-8 ">
      <ProductManagement />
    </div>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default Management;
