"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});
const FadeInRight = dynamic(() => import("./Framer/FadeInRight"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <main className={styles.Hero}>
        <section className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <hgroup>
              <h1>
                Your one stop app for <br></br> everyday
                <span className="">payments.</span>
              </h1>
              <p>
                Recharge phones, Buy Giftcards, Trade digital assets & Pay bills
                in over 50 countries.
              </p>
            </hgroup>
            <div className={styles.heroSocials}>
              <picture>
                <FadeInUp>
                  <Link
                    href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}
                  >
                    <Image
                      src="/app-store.svg"
                      alt="App Store"
                      width={146}
                      height={146}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </Link>
                </FadeInUp>
              </picture>
              <picture>
                <FadeInUp>
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
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </Link>
                </FadeInUp>
              </picture>
            </div>
          </div>
          <div className={styles.heroImage}>
            <FadeInRight>
              <Image
                src="/bing-hero.png"
                alt="Picture of the author"
                width={650}
                height={650}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </FadeInRight>
          </div>
        </section>
      </main>
    </>
  );
}
