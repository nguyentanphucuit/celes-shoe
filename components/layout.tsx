import Navbar from "./Navbar";
import Footer from "./Footer";
import { Providers } from "@/redux/provider";
import "@/app/globals.css";
import ToastProvider from "@/components/toast/ToastProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <ToastProvider>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </ToastProvider>
    </Providers>
  );
}
