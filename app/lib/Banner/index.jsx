"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

const FadeInLeft = dynamic(() => import("../../components/Framer/FadeInLeft"), {
  ssr: false,
});

const FadeInRight = dynamic(() => import("../../components/Framer/FadeInRight"), {
  ssr: false,
});

const FadeInUp = dynamic(() => import("../../components/Framer/FadeInUp"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <section className={styles.Hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <hgroup>
              <h1>
                Your one stop app for <br></br> everyday payments.
              </h1>
              <p>
                Recharge phones, Buy Giftcards, Trade digital assets & Pay bills
                in over 50 countries.
              </p>
            </hgroup>

            <div className={styles.heroSocials}>
              <picture>
                <Link
                  href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}
                >
                  <Image
                    src="/app-store.svg"
                    alt="App Store"
                    width={146}
                    height={146}
                    priority
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </Link>
              </picture>
              <picture>
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.bingpay.bing_pay"
                  }
                >
                  <Image
                    src="/google-play.svg"
                    alt="Google Play"
                    width={160}
                    height={160}
                    priority
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </Link>
              </picture>
            </div>
          </div>
          <picture className={styles.heroImage}>
            <Image
              src="/bing-hero.png"
              alt="bing hero"
              width={650}
              height={650}
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </picture>
        </div>
      </section>
    </>
  );
}
