import "@/app/globals.css";
import { GeistProvider } from "@geist-ui/core";
import Layout from "../components/layout";
import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";

export const metadata = {
  title: "Celes shoe",
  description: "Discover the best shoe in the world.",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <GeistProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GeistProvider>
    </NextIntlClientProvider>
  );
}
