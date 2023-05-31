"use client";

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./lib/Banner/index"), {
  ssr: false,
});

const Services = dynamic(() => import("./lib/Services/index"), {
  ssr: false,
});

const Business = dynamic(() => import("./lib/Business/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Business />
    </>
  );
}
