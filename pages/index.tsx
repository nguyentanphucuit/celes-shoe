import Cart from "@/components/modals/CartModal";
import Collections from "@/components/collection/Collections";
import Hero from "@/components/collection/Hero";
import ProductDetailModal from "@/components/modals/ProductDetailModal";
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
      <div className="padding-x padding-y max-width" id="discover">
        <ProductDetailModal />
        <Collections />
      </div>
    </div>
  );
}
