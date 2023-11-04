import "@/app/globals.css";
import ProductFilters from "@/components/product/ProductFilters";
import ProductDetailModal from "@/components/modals/ProductDetailModal";
import { GetStaticPropsContext } from "next";

const Product = () => {
  return (
    <div>
      <ProductDetailModal />
      <ProductFilters />
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

export default Product;
