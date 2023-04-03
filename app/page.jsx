"use client";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./components/navBar.jsx"), { ssr: false });
const MobileNav = dynamic(() => import("./components/mobileNav.jsx"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("./components/heroSection.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <NavBar />
      <MobileNav />
      <HeroSection />
    </main>
  );
}
