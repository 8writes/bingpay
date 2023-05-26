"use client";

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./components/Banner/index"), {
  ssr: false,
});

const Section = dynamic(() => import("./components/Section/index"), {
  ssr: false,
});

export default function Faq() {
  return (
    <main>
      <Banner />
      <Section />
    </main>
  );
}
