import "@/app/globals.css";
import CategoryFilters from "@/components/CategoryFilters";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductDetailModal from "@/components/product/ProductDetailModal";
import ToastProvider from "@/components/toast/ToastProvider";
import { Providers } from "@/redux/provider";
import React from "react";

const Category = () => {
  return (
    <>
      <Providers>
        <ToastProvider>
          <Navbar />
          <ProductDetailModal />
          <CategoryFilters />
          <Footer />
        </ToastProvider>
      </Providers>
    </>
  );
};

export default Category;
