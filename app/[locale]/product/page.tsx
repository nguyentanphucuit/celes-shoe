import ProductDetailModal from "@/components/modals/ProductDetailModal";
import ProductFilters from "@/components/product/ProductFilters";
import { useApiDataFireStore } from "../../../hooks/useApiData";

const Product = () => {
  return (
    <div>
      <ProductDetailModal />
      <ProductFilters />
    </div>
  );
};

export default Product;
