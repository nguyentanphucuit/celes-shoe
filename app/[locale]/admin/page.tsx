import ProductManagement from "@/components/admin/ProductManagement";
import { GetStaticPropsContext } from "next";

const Management = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 l:px-8 ">
      <ProductManagement />
    </div>
  );
};

export default Management;
