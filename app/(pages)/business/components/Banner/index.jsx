"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Banner() {
  return (
    <>
      <section className={styles.Hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <hgroup>
              <h1>Accept payments with Bingpay!.</h1>
              <p>
                Bingpay business allows you accept payments with your merchant
                ID, make bulk transactions with discounts, get access to our
                developer APIs and reach more audience with SMS marketing.
              </p>
            </hgroup>
            <div className={styles.heroSocials}>
              <span className={styles.btn}>
                <FadeInUp>
                  <Link href="/">
                    <button>Join Waitlist</button>
                  </Link>
                </FadeInUp>
              </span>
            </div>
          </div>
          <picture className={styles.heroImage}>
            <FadeInUp>
              <Image
                src="/merchant.svg"
                alt="business"
                width={300}
                height={300}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </FadeInUp>
          </picture>
        </div>
      </section>
    </>
  );
}
