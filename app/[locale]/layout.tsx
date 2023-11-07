import "@/app/globals.css";
import GeistProviders from "@/providers/GeistProviders";
import { Providers } from "@/redux/provider";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Navbar locale={locale} />
            <GeistProviders>
              <div className="pt-36">{children}</div>
            </GeistProviders>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
