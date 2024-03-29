"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./index.module.css";

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

export default function Services() {
  return (
    <>
      <section className={styles.services}>
        <FadeInUp>
          <hgroup className={styles.serviceIntro}>
            <div>
              <h1>Our Products</h1>
            </div>

            <div>
              <p>
                Bingpay unlocks possibilities of making payments for millions of
                goods and services.
              </p>
            </div>
          </hgroup>
        </FadeInUp>
        <section className={styles.servicesList}>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/list.svg"
                  alt="list"
                  width={50}
                  height={0}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <span>
                <h1>Utility Bills</h1>
              </span>
              <span>
                <p>
                  Pay Electricity bills, Internet bundles & Cable TV
                  subscriptions.
                </p>
              </span>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/top-up.svg"
                  alt="top up"
                  width={50}
                  height={0}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <span>
                <h1>Global Mobile Top-Up</h1>
              </span>
              <span>
                <p>
                  Top-up airtime and data globally, we cover over 50+ countries.
                </p>
              </span>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/exchange.svg"
                  alt="exchange"
                  width={50}
                  height={0}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <span>
                <h1>Trade Digital Assets</h1>
              </span>
              <span>
                <p>Easily convert unused Airtime and Giftcards to cash!.</p>
              </span>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/gift-card.svg"
                  alt="giftcard"
                  width={50}
                  height={0}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <div>
                <h1>Gift Cards</h1>
              </div>
              <span>
                <p>
                  Thousands of brands to buy Giftcards directly from your
                  Bingpay wallet.
                </p>
              </span>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/flight.svg"
                  alt="flight"
                  width={50}
                  height={0}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <span>
                <h1>Flight & Hotels</h1>
              </span>
              <span>
                <p>
                  Book international and domestic flights, hotels for holidays.
                </p>
              </span>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/ticket.svg"
                  alt="ticket"
                  width={50}
                  height={0}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <span>
                <h1>Event Tickets</h1>
              </span>
              <span>
                <p>Purchase tickets for your favorite shows & events easily.</p>
              </span>
            </div>
          </FadeInUp>
        </section>
      </section>
    </>
  );
}
