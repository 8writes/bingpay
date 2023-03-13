"use client";
import { PageWrapper } from "./page-wrapper";
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
      <PageWrapper>
        <NavBar />
        <MobileNav />
        <HeroSection />
      </PageWrapper>
    </main>
  );
}
