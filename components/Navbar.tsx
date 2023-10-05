"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Account from "./Account";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { createPortal } from "react-dom";
import Cart from "./CartModal";

const Navbar = () => {
  return (
    <header className="w-full fixed z-10">
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
          <Cart />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
