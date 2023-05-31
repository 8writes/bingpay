"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./index.module.css";

const Button = dynamic(() => import("../../components/Button"), {
  ssr: false,
});

const FadeInLeft = dynamic(() => import("../../components/Framer/FadeInLeft"), {
  ssr: false,
});

const FadeInRight = dynamic(
  () => import("../../components/Framer/FadeInRight"),
  {
    ssr: false,
  }
);

const FadeInUp = dynamic(() => import("../../components/Framer/FadeInUp"), {
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
            <div>
              <FadeInUp>
                <Button>Join Whitelist</Button>
              </FadeInUp>
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
