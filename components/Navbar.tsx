"use client";
import { classNames } from "@/constants/common";
import { Popover, Switch, Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Banner from "./Banner";
import LanguageSelector from "./LanguageSelector";
import SpeedDial from "./SpeedDial";
import CartModal from "./modals/CartModal";
import { UserAuth } from "@/app/[locale]/context/AuthContext";
import { profileItem } from "@/constants";
import CustomButton from "./CustomButton";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  Bars3CenterLeftIcon,
  Bars3Icon,
  ChevronRightIcon,
  HomeIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const Navbar = ({ locale }: { locale: string }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, logOut } = UserAuth();
  const router = useRouter();

  const pathname = usePathname();
  const currentNav = pathname?.split("/")[1] || "";
  const listPath = pathname?.split("/").slice(1) ?? [];
  const t = useTranslations("Navbar");
  console.log("user: " + user?.displayName);
  useEffect(() => {
    setShowMenu(false);
    setShowProfile(false);
  }, [pathname]);

  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOpenProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const navItem = [
    {
      title: t("Home"),
      path: "/",
    },
    {
      title: t("Product"),
      path: "/product",
    },
    {
      title: t("Blog"),
      path: "/blog",
    },
    {
      title: t("About"),
      path: "/about",
    },
    {
      title: t("Contact"),
      path: "/contact",
    },
    {
      title: t("Login"),
      path: "/login",
    },
  ];

  return (
    <>
      <nav className="w-full fixed z-20 bg-gray-800">
        <SpeedDial />
        <Banner />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="relative flex-shrink-0 mt-1">
                <Link href="/">
                  <Image
                    width={212}
                    height={50}
                    src="/logo.png"
                    className="object-contain"
                    alt="Celes Shoe"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItem.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className={classNames(
                      `/${currentNav}` === item.path
                        ? "bg-gray-700 text-white"
                        : "",
                      "text-gray-300 hover:bg-gray-700 active:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    )}>
                    {item.title}
                    {`/${currentNav}` === item.path}
                  </Link>
                ))}
              </div>
            </div>
            <div className="">
              <div className="flex items-center">
                {/* <ModeSwitcher /> */}
                <CartModal />
                <ProfileDropdown
                  handleOpenProfile={handleOpenProfile}
                  handleSignOut={handleSignOut}
                  user={user}
                />
                <div className="hidden md:block relative px-2">
                  <LanguageSelector locale={locale} />
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
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className={showMenu ? `md:hidden` : `hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItem.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="text-gray-300 hover:bg-gray-700 active:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium block">
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
            <div className="mt-3 px-3">
              <LanguageSelector locale={locale} />
            </div>
            <div className="mt-3 space-y-1 px-2">
              {profileItem.map((item, index) => (
                <Link key={index} href={item.path} className="profile">
                  {item.title}
                </Link>
              ))}
              <button onClick={() => handleSignOut()}>Sign Out</button>
            </div>
          </div>
        </div>
        <div className={!showMenu ? `md:hidden` : `hidden`} id="mobile-menu">
          <BreadCrumb listPath={listPath} />
        </div>
      </nav>
    </>
  );
};

export const BreadCrumb = (props: any) => {
  let listPath = props.listPath;
  return (
    <div
      className="flex px-5 py-3 justify-center text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb">
      <ol className="inline-flex capitalize items-center space-x-1 md:space-x-3">
        {listPath.map((path: string, index: number) => (
          <li className="inline-flex items-center" key={index}>
            <Link
              href={`/${path}`}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              {index == 0 ? (
                <HomeIcon className="w-4 h-4 mx-2.5 text-gray-800" />
              ) : (
                <ChevronRightIcon className="w-4 h-4 mx-1 text-gray-600" />
              )}
              {path == "" ? "Home" : path}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

const ModeSwitcher = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-8">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-indigo-900" : "bg-indigo-700"}
          relative inline-flex h-[23px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

const ProfileDropdown = (props: any) => {
  return (
    <div className="hidden md:block w-full relative px-2 ">
      {props.user ? (
        <Popover className="relative">
          {() => (
            <>
              <Popover.Button>
                <div className="w-6 h-6 mt-2">
                  <Image
                    width={24}
                    height={24}
                    src="/profile.png"
                    className="rounded-full"
                    alt="avatar"
                    onClick={props.handleOpenProfile}
                  />
                </div>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1">
                <Popover.Panel className="absolute left-0 z-10 mt-3 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y">
                  <div className="bg-gray-50 p-4 flex flex-col justify-center items-center gap-4">
                    <span className="text-sm font-medium text-gray-900">
                      {props.user?.email}
                    </span>
                    <Image
                      width={48}
                      height={48}
                      src="/profile.png"
                      className="rounded-full"
                      style={{ height: "32px" }}
                      alt="avatar"
                    />
                    <div>Hi, {props.user?.displayName}!</div>
                  </div>
                  <div className="overflow-hidden bg-white ">
                    {profileItem.map((item, index) => (
                      <Link
                        key={index}
                        href={item.path}
                        className="profile-dropdown">
                        {item.title}
                      </Link>
                    ))}
                    <CustomButton
                      title="Sign Out"
                      leftIcon={
                        <div className="w-6 h-6">
                          <ArrowRightOnRectangleIcon />
                        </div>
                      }
                      containerStyles="custom-btn w-32 px-3 py-2 items-center text-primary justify-center border border-transparent text-sm font-semibold"
                      handleClick={() => props.handleSignOut()}></CustomButton>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ) : (
        <Link href="/login">
          <div className="w-6 h-6 text-white">
            <UserIcon />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
