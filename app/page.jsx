"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Home/Hero/index"), {
  ssr: false,
});
const Services = dynamic(() => import("./components/Home/Services/index"), {
  ssr: false,
});
const Business = dynamic(() => import("./components/Home/Business/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Business />
    </>
  );
}
