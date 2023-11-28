import { useTranslations } from "next-intl";
// import { footerLinks } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");

  const footerLinks = [
    {
      title: t("Company Info"),
      links: [
        { title: t("About Us"), url: "/" },
        { title: t("Blog"), url: "/" },
        { title: t("Careers"), url: "/" },
      ],
    },
    {
      title: t("Help & Support"),
      links: [
        { title: t("Shipping Info"), url: "/" },
        { title: t("Return"), url: "/" },
        { title: t("Refund"), url: "/" },
        { title: t("Warranty Policy"), url: "/" },
      ],
    },
    {
      title: t("Customer Care"),
      links: [
        { title: t("Contact Us"), url: "/" },
        { title: t("Payment & Tax"), url: "/" },
        { title: t("Bonus Point"), url: "/" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="bg-gray-800 p-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={220}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Celesshoe. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
