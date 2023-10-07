import Cart from "@/components/CartModal";
import Collections from "@/components/Collections";
import Hero from "@/components/Hero";
import ProductDetailModal from "@/components/product/ProductDetailModal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <ProductDetailModal />
          <Collections />
        </div>
      </main>
    </>
  );
}
