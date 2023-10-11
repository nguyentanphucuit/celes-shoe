import "@/app/globals.css";
import CategoryFilters from "@/components/CategoryFilters";
import ProductDetailModal from "@/components/product/ProductDetailModal";

const Category = () => {
  return (
    <div>
      <ProductDetailModal />
      <CategoryFilters />
    </div>
  );
};

export default Category;
