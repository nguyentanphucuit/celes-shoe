import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GeistProviders from "@/providers/GeistProviders";
import { Providers } from "@/redux/provider";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import NextIntlProvider from "./NextIntlProvider";
import { AuthContextProvider } from "./context/AuthContext";

export const metadata = {
  title: "Celes shoe",
  description: "Discover the best shoe in the world.",
};

const locales = ["en", "vi"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  unstable_setRequestLocale(locale);
  return (
    <html suppressHydrationWarning lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlProvider locale={locale} messages={messages}>
          <Providers>
            <GeistProviders>
              <AuthContextProvider>
                <Navbar locale={locale} />
                <div className="pt-36">{children}</div>
                <Footer />
              </AuthContextProvider>
            </GeistProviders>
          </Providers>
        </NextIntlProvider>
      </body>
    </html>
  );
}
