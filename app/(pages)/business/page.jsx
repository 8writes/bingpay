"use client";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("./lib/Banner"), {
  ssr: false,
});
const Section = dynamic(() => import("./lib/Section"), {
  ssr: false,
});
export default function Business() {
  return (
    <>
      <Banner />
      <Section />
    </>
  );
}
