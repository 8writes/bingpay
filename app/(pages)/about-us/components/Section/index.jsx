"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import styles from "./index.module.css";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Section() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContext}>
          <div>
            <FadeInUp>
              <h1>About Us</h1>
              <p>
                Bingpay offers payment services from over 750 brands in one
                marketplace. We're the go-to online store for digital prepaid
                credit for consumers who want to send or buy mobile top-ups,
                gift entertainment subscription cards to a loved one or
                themselves.
              </p>
            </FadeInUp>
          </div>
          <div>
            <FadeInUp>
              <h1>Our Mission</h1>
              <p>
                At Bingpay, our mission is to revolutionize the way you make
                payments, by offering innovative solutions, we aim to simplify
                digital payments, promote financial inclusion and enhance the
                overall financial well-being of our users.
              </p>
            </FadeInUp>
          </div>
          <div>
            <FadeInUp>
              <h1>Our History</h1>
              <p>
                Bingpay.ng was founded on April 26th, 2021 in Port-Harcourt,
                Nigeria. The company is among the fastest-growing fintech
                companies in West Africa and was introduced by Trilbertech
                Limited to provide seamless prepaid services to anyone around
                the globe, which includes Giftcards, Digital assets trade,
                Mobile topup and Bills payment.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
