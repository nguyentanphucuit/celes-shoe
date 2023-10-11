import Cart from "@/components/CartModal";
import Collections from "@/components/Collections";
import Hero from "@/components/Hero";
import ProductDetailModal from "@/components/product/ProductDetailModal";
import Image from "next/image";

export const metadata = {
  title: "Celes shoe",
  description: "Discover the best shoe in the world.",
};

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <header></header>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <ProductDetailModal />
        <Collections searchParams={searchParams} />
      </div>
    </div>
  );
}
