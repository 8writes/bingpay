"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import styles from "./index.module.css";
import BingHero from "/public/images/bing-hero.png";
import GooglePlay from "/public/images/google-play.svg";
import AppStore from "/public/images/app-store.svg";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

const FadeInDown = dynamic(() => import("./Framer/FadeInDown"), {
  ssr: false,
});

const FadeInRight = dynamic(() => import("./Framer/FadeInRight"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div>
      <section className={styles.Hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <FadeInDown>
              <div>
                <h1>
                  Your one stop app for <br></br> everyday{" "}
                  <span className="">payments.</span>
                </h1>

                <p>
                  Recharge phones, Buy giftcards, Trade digital assets & Pay
                  bills in over 50 countries.
                </p>
              </div>
            </FadeInDown>

            <div className={styles.heroSocials}>
              {" "}
              <div>
                {" "}
                <FadeInUp>
                  <a
                    href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}
                  >
                    <Image
                      src={AppStore}
                      alt="App Store"
                      width={146}
                      height={146}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </a>
                </FadeInUp>
              </div>
              <div>
                <FadeInUp>
                  <a
                    href={
                      "https://play.google.com/store/apps/details?id=com.bingpay.bing_pay"
                    }
                  >
                    <Image
                      src={GooglePlay}
                      alt="Google Play"
                      width={160}
                      height={160}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </a>
                </FadeInUp>
              </div>{" "}
            </div>
          </div>

          <div className={styles.heroImage}>
            <FadeInRight>
              <Image
                src={BingHero}
                alt="Picture of the author"
                width={650}
                height={650}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />{" "}
            </FadeInRight>
          </div>
        </div>
      </section>
    </div>
  );
}
