import Navbar from "./Navbar";
import Footer from "./Footer";
import { Providers } from "@/redux/provider";
import "@/app/globals.css";
import { useParams, usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </Providers>
  );
}
