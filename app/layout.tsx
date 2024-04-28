import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="overflow-hidden max-container padding-container relative z-30 py-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
