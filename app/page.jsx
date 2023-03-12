"use client";
import HeroSection from "./components/heroSection";
import MobileNav from "./components/mobileNav";
import NavBar from "./components/navBar";
import { PageWrapper } from "./page-wrapper";


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
