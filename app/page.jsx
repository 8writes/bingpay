"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./components/navBar.jsx"), {
  ssr: false
});
const MobileNav = dynamic(() => import("./components/mobileNav.jsx"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("./components/heroSection.jsx"), {
  ssr: false,
});

const Services = dynamic(() => import("./components/services.jsx"), {
  ssr: false,
});

const Footer = dynamic(() => import("./components/footer.jsx"), {
  ssr: false,
});

const Business = dynamic(() => import("./components/business.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
     
     
      <HeroSection />
     
    </main>
  );
}
