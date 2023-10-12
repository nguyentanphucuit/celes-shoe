import { CssBaseline, GeistProvider } from "@geist-ui/core";
import Layout from "../components/layout";
import "@/app/globals.css";

export const metadata = {
  title: "Celes shoe",
  description: "Discover the best shoe in the world.",
};

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <GeistProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}
