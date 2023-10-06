import Cart from "@/components/CartModal";
import Collections from "@/components/Collections";
import Hero from "@/components/Hero";
import ShoeDetailModal from "@/components/shoe/ShoeDetailModal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>
          <ShoeDetailModal />
          <Collections />
        </div>
      </main>
    </>
  );
}
