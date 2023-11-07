import "@/app/globals.css";
import ProductDetailComponent from "@/components/product/ProductDetailComp";
import { listProducts } from "@/constants";
import { ProductProps } from "@/types";

export function generateStaticParams() {
  // const posts = await fetch("https://.../posts").then((res) => res.json());
  const products = listProducts.map((product) => ({
    slug: product.title.toLowerCase().replace(/ /g, "-"),
  }));
  return [...products];
}

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const currentProduct =
    listProducts.find((product) => product.id == params.slug) ??
    (listProducts[0] as ProductProps);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <ProductDetailComponent {...currentProduct} />
    </div>
  );
};

export default ProductDetail;
