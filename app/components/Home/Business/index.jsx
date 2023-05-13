"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import styles from "./index.module.css";
import Merchant from "/public/images/merchant.svg";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Business() {
  return (
    <div>
      <div className={styles.bg}>
        <section className={styles.business}>
          <span className={styles.introMobile}>
            <h1>Bingpay for Business 💸</h1>
          </span>

          <div className={styles.businessImg}>
            <FadeInUp>
              <Image
                src={Merchant}
                alt="Download Image"
                width={480}
                height={480}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />{" "}
            </FadeInUp>
          </div>

          <div className={styles.businessContext}>
            {" "}
            <FadeInUp>
              <span className={styles.intro}>
                {" "}
                <h1>Bingpay for Business 💸</h1>{" "}
              </span>{" "}
            </FadeInUp>
            <span className={styles.heading}>
              <FadeInUp>
                <h1> Accept payments with Bingpay!</h1>
              </FadeInUp>
            </span>
            <span>
              <FadeInUp>
                <p>
                  With Bingpay business, you can accept payment with your
                  merchant ID, make bulk transactions with discounts, get access
                  to our developer APIs and reach more audience with SMS
                  marketing.
                </p>
              </FadeInUp>
            </span>
            <span className={styles.btn}>
              <FadeInUp>
                <button>Join Waitlist</button>
              </FadeInUp>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
