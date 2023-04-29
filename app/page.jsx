"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/heroSection.jsx"), {
  ssr: false,
});

const Services = dynamic(() => import("./components/services.jsx"), {
  ssr: false,
});

const Business = dynamic(() => import("./components/business.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Business />
    </main>
  );
}
