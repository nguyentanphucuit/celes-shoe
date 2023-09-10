"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Account from "./Account";
import { useAppSelector } from "@/redux/hooks";

const Navbar = () => {
  const handleOpenCart = () => {};
  const counterCart = useAppSelector((state) => state.counterReducer.value);
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          {/* <Image
            src="/logo.svg"
            alt="Celes Shoe Logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          CELES SHOE
        </Link>
        <Link href="/" className="flex justify-center items-center">
          Category
        </Link>
        <Link href="/" className="flex justify-center items-center">
          Product
        </Link>
        <Link href="/" className="flex justify-center items-center">
          About
        </Link>
        <Link href="/contact" className="flex justify-center items-center">
          Contact
        </Link>
        <Link href="/login" className="flex justify-center items-center">
          Login
        </Link>
        <Link href="/" className="flex justify-center items-center">
          <CustomButton
            handleClick={handleOpenCart}
            containerStyles="btn-add-to-cart"
            title="Cart"
            leftIcon={true}
            indicatorCount={counterCart}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
