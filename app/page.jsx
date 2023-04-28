"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./components/navBar.jsx"), {
  ssr: true
});
const MobileNav = dynamic(() => import("./components/mobileNav.jsx"), {
  ssr: true,
});
const HeroSection = dynamic(() => import("./components/heroSection.jsx"), {
  ssr: false,
});

const Services = dynamic(() => import("./components/services.jsx"), {
  ssr: true,
});

const Footer = dynamic(() => import("./components/footer.jsx"), {
  ssr: true,
});

const Business = dynamic(() => import("./components/business.jsx"), {
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <NavBar />
      <MobileNav />
      <HeroSection />
      <Services />
      <Business />
      <Footer />
    </main>
  );
}
