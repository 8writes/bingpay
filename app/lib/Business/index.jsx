"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

const Button = dynamic(() => import("../../components/Button"), {
  ssr: false,
});

const FadeInLeft = dynamic(() => import("../../components/Framer/FadeInLeft"), {
  ssr: false,
});

const FadeInRight = dynamic(() => import("../../components/Framer/FadeInRight"), {
    ssr: false,
  }
);

const FadeInUp = dynamic(() => import("../../components/Framer/FadeInUp"), {
  ssr: false,
});

const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 500); // Adjust the delay duration (in milliseconds) as needed
};

export default function Business() {
  return (
    <>
      <section className={styles.bg}>
        <div className={styles.business}>
          <div>
            <FadeInUp>
              <span className={styles.introMobile}>
                <h1 className={styles.introMobileBg}>
                  Bingpay for Business 💸
                </h1>
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
            <div>
              <FadeInUp>
                <Link href="/business" onClick={scrollToTop}>
                  <Button>Get Started</Button>
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
