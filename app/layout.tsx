import "./globals.css";
import {
  Open_Sans,
} from "next/font/google";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import CartBagIcon from "./components/CartBagIcon";
import { CartContextProvider } from "@/context/CartContext";
import CartList from "./components/CartList";
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});
export const metadata: Metadata = {
  title: "HOTPIZZA - Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartContextProvider>
      <html lang="en">
        <body className={`${openSans.className}`}>
          <Nav />
          <CartBagIcon />
          <CartList />
          {children}
        </body>
      </html>
    </CartContextProvider>
  );
}
