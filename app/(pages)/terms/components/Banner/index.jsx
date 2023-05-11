"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import styles from "./index.module.css";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Banner() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.bannerContext}>
          <h1>Terms & Conditions </h1>
          <p>Last Updated: 25 July, 2021. </p>
        </div>
      </div>
    </div>
  );
}
