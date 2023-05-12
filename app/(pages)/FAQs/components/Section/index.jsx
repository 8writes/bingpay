"use client";

import dynamic from "next/dynamic";

import styles from "./index.module.css";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Section() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionContext}>
          <div className={styles.alert}>
            <img
              src="https://www.animatedimages.org/data/media/695/animated-under-construction-image-0035.gif"
              border="0"
              alt="animated-under-construction-image-0035"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
