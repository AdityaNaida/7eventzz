//libraries
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
//styles
import "./globals.css";
//components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "7eventzz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
