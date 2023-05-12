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
          <h1>Contact Us</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}
