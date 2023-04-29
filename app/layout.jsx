"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./components/navBar.jsx"), {
  ssr: false,
});

const MobileNav = dynamic(() => import("./components/mobileNav.jsx"), {
  ssr: false,
});

const Footer = dynamic(() => import("./components/footer.jsx"), {
  ssr: false,
});
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
