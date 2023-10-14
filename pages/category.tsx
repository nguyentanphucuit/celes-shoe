import "@/app/globals.css";
import CategoryFilters from "@/components/category/CategoryFilters";
import ProductDetailModal from "@/components/modals/ProductDetailModal";

const Category = () => {
  return (
    <div>
      <ProductDetailModal />
      <CategoryFilters />
    </div>
  );
};

export default Category;
