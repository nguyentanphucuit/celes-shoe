import Navbar from "./Navbar";
import Footer from "./Footer";
import { Providers } from "@/redux/provider";
import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </Providers>
  );
}
