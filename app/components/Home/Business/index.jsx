"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Business() {
  return (
    <div>
      <div className={styles.bg}>
        <section className={styles.business}>
          <div>
            <FadeInUp>
              <span className={styles.introMobile}>
                <h1>Bingpay for Business 💸</h1>
              </span>
            </FadeInUp>
          </div>
          <div className={styles.businessImg}>
            <FadeInUp>
              <Image
                src="/merchant.svg"
                alt="Download Image"
                width={480}
                height={480}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </FadeInUp>
          </div>

          <div className={styles.businessContext}>
            <FadeInUp>
              <span className={styles.intro}>
                <h1>Bingpay for Business 💸</h1>
              </span>
            </FadeInUp>
            <span className={styles.heading}>
              <FadeInUp>
                <h1> Accept payments with Bingpay!</h1>
              </FadeInUp>
            </span>
            <span>
              <FadeInUp>
                <p>
                  Bingpay business allows you accept payments with your merchant
                  ID, make bulk transactions with discounts, get access to our
                  developer APIs and reach more audience with SMS marketing.
                </p>
              </FadeInUp>
            </span>
            <span className={styles.btn}>
              <FadeInUp>
                <Link href="/business">
                  <button>Get Started</button>
                </Link>
              </FadeInUp>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
