"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./index.module.css";
import AppImg from "/public/download.png";
import AppStore from "/public/app-store.svg";
import PlayStore from "/public/google-play.svg";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function DownloadApp() {
  return (
    <>
      <FadeInUp>
        <section className={styles.downloadApp}>
          <div className={styles.downloadAppContext}>
            <span>
              <h1>Download the Bingpay Mobile App.</h1>
            </span>
            <span>
              <p>
                Create a personal or business account today and enjoy endless
                payment opportunities.
              </p>
            </span>
            <div className={styles.heroSocials}>
              <picture>
                <a href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}>
                  <Image
                    src={AppStore}
                    alt="App Store"
                    width={146}
                    height={146}
                    priority
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </a>
              </picture>
              <picture>
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=com.bingpay.bing_pay"
                  }
                >
                  <Image
                    src={PlayStore}
                    alt="Google Play"
                    width={160}
                    height={160}
                    priority
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </a>
              </picture>
            </div>
          </div>
          <picture className={styles.downloadImg}>
            <Image
              src={AppImg}
              alt="Download image"
              width={500}
              height={500}
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </picture>
        </section>
      </FadeInUp>
    </>
  );
}
