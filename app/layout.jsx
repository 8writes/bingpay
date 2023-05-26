"use client";

import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("./components/Header/Nav/index"), {
  ssr: false,
});
const MobileNav = dynamic(() => import("./components/Header/MobileNav/index"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer/index"), {
  ssr: false,
});

import "./globals.css";

import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_grotesk.variable}>
        <NavBar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
