import Cart from "@/components/modals/CartModal";
import Collections from "@/components/collection/Collections";
import HeroSection from "@/components/collection/HeroSection";
import ProductDetailModal from "@/components/modals/ProductDetailModal";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Celes shoe",
  description: "Discover the best shoe in the world.",
};

export default function Home({
  searchParams,
  params: { locale },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <HeroSection />
      <div className="padding-x padding-y max-width" id="discover">
        <ProductDetailModal />
        <Collections />
      </div>
    </div>
  );
}
