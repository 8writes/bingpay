"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import styles from "./index.module.css";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Section() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionContext}></div>
      </div>
    </div>
  );
}
