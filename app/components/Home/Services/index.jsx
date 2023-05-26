"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./index.module.css";
const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Services() {
  return (
    <>
      <main className={styles.services}>
        <FadeInUp>
          <hgroup className={styles.serviceIntro}>
            <div>
              <h1>Our Products</h1>
            </div>
            <FadeInUp>
              <div>
                <p>
                  Bingpay unlocks possibilities of making payments for millions
                  of goods and services.
                </p>
              </div>
            </FadeInUp>
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
                  height={50}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <div>
                <h1>Utility Bills</h1>
              </div>
              <div>
                <p>
                  Pay Electricity bills, Internet bundles & Cable TV
                  subscriptions.
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/top-up.svg"
                  alt="topup"
                  width={50}
                  height={50}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <div>
                <h1>Global Mobile Top-Up</h1>
              </div>
              <div>
                <p>
                  Top-up airtime and data globally, we cover over 50+ countries.
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/exchange.svg"
                  alt="exchange"
                  width={50}
                  height={50}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <div>
                <h1>Trade Digital Assets</h1>
              </div>
              <div>
                <p>Easily convert unused Airtime and Giftcards to cash!.</p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/gift-card.svg"
                  alt="giftcard"
                  width={50}
                  height={50}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <div>
                <h1>Vouchers</h1>
              </div>
              <div>
                <p>
                  Thousands of brands to buy Giftcards directly from your
                  Bingpay wallet.
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/flight.svg"
                  alt="flight"
                  width={50}
                  height={50}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <div>
                <h1>Flight & Hotels</h1>
              </div>
              <div>
                <p>
                  Book international and domestic flights, hotels for holidays.
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <picture>
                <Image
                  src="/ticket.svg"
                  alt="ticket"
                  width={50}
                  height={50}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </picture>
              <div>
                <h1>Event Tickets</h1>
              </div>
              <div>
                <p>Purchase tickets for your favorite shows & events easily.</p>
              </div>
            </div>
          </FadeInUp>
        </section>
      </main>
    </>
  );
}
