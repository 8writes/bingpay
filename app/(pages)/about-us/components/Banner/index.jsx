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
          <h1>A new payment experience is here! </h1>
          <p>
            We're on an adventure to provide endless payment possibilities for
            everyone.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
