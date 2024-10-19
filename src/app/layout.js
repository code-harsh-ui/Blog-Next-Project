import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ClientSideProviderTest from "@/components/ClientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSideProviderTest>
          {/* Wrapped the whole application to client component and it will not impact the server component it will still remains the server component which we check in blog.js page */}
          <Navbar />
          {children}
          <Footer />
        </ClientSideProviderTest>
      </body>
    </html>
  );
}
