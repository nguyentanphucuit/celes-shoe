import "@/app/globals.css";
import ProductFilters from "@/components/product/ProductFilters";
import ProductDetailModal from "@/components/modals/ProductDetailModal";

const Product = () => {
  return (
    <div>
      <ProductDetailModal />
      <ProductFilters />
    </div>
  );
};

export default Product;
