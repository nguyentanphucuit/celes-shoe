"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Banner from "./Banner";
import CartModal from "./CartModal";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
    setShowProfile(false);
  }, [router.asPath]);

  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOpenProfile = () => {
    setShowProfile(!showProfile);
  };

  const navItem = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Category",
      path: "/category",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];
  const profileItem = [
    {
      title: "Your Profile",
      path: "/profile",
    },
    {
      title: "Settings",
      path: "/settings",
    },
    {
      title: "Sign out",
      path: "/singout",
    },
  ];

  return (
    <nav className="w-full fixed z-10 bg-gray-800">
      <Banner />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <button>
                  <Image
                    width={64}
                    height={64}
                    src="/logo.png"
                    alt="Celes Shoe"
                  />
                </button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItem.map((item, index) => (
                  <Link key={index} href={item.path} className="nav-item">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <div className="ml-4 flex items-center md:ml-6">
              <CartModal />

              <div className="hidden md:block relative ml-3 px-2">
                <Popover className="relative">
                  {() => (
                    <>
                      <Popover.Button>
                        <Image
                          width={32}
                          height={32}
                          src="/profile.png"
                          className="rounded-full"
                          style={{ height: "32px" }}
                          alt="avatar"
                          onClick={handleOpenProfile}
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-32 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                          <div className="overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            {profileItem.map((item, index) => (
                              <Link
                                key={index}
                                href={item.path}
                                className="profile-dropdown">
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                {/* <button
                  type="button"
                  className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <Image
                    width={32}
                    height={32}
                    src="/profile.png"
                    className="rounded-full"
                    style={{ height: "32px" }}
                    alt="avatar"
                    onClick={handleOpenProfile}
                  />
                </button>

                <div className={showProfile ? "" : "hidden"}>
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}>
                    {profileItem.map((item, index) => (
                      <Link
                        key={index}
                        href={item.path}
                        className="profile-dropdown">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span
                className="absolute -inset-0.5"
                onClick={handleOpenMenu}></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={showMenu ? `md:hidden` : `hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navItem.map((item, index) => (
            <Link key={index} href={item.path} className="nav-item block">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <Image
                className="rounded-full"
                width={48}
                height={48}
                style={{ height: "48px" }}
                src="/profile.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                Peter Nguyen
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                nguyentanphucuit@gmail.com
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {profileItem.map((item, index) => (
              <Link key={index} href={item.path} className="profile">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
