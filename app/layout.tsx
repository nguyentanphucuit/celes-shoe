import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "@/redux/provider";
import ToastProvider from "@/components/toast/ToastProvider";

export const metadata = {
  title: "Celes shoe",
  description: "Discover the best shoe in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full relative">
        <Providers>
          <ToastProvider>
            <Navbar />
            {children}
            <Footer />
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
