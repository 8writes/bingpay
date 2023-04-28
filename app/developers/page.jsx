"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../components/navBar.jsx"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/footer.jsx"), {
  ssr: false,
});

export default function Developers() {
  return (
    <main>
      <NavBar />
     
      <Footer />
    </main>
  );
}
