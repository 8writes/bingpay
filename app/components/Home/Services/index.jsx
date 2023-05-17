"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import styles from "./index.module.css";
import list from "/public/images/list.svg";
import giftCard from "/public/images/gift-card.svg";
import exchange from "/public/images/exchange.svg";
import ticket from "/public/images/ticket.svg";
import topUp from "/public/images/top-up.svg";
import flight from "/public/images/flight.svg";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Services() {
 
  return (
    <div>
      <section className={styles.services}>
        <FadeInUp>
          <section className={styles.serviceIntro}>
            <div>
              <h1>Value for money</h1>
            </div>
            <FadeInUp>
              <div>
                <p>
                  Bingpay unlocks possibilities of making payments for millions
                  of goods and services.
                </p>
              </div>
            </FadeInUp>
          </section>
        </FadeInUp>
        <section className={styles.servicesList}>
          {" "}
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <div>
                <Image
                  src={list}
                  alt="list"
                  width={50}
                  height={0}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div>
                <h1>Utility Bills</h1>
              </div>
              <div>
                <p>
                  Pay Electricity bills, Internet bundles & Cable TV
                  subscriptions.
                </p>
              </div>
            </div>{" "}
          </FadeInUp>
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <div>
                <Image
                  src={topUp}
                  alt="topup"
                  width={50}
                  height={0}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div>
                <h1>Global Mobile Top-Up</h1>
              </div>
              <div>
                <p>
                  Top-up airtime and data globally, we cover over 50+ countries.
                </p>
              </div>
            </div>
          </FadeInUp>{" "}
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <div>
                <Image
                  src={exchange}
                  alt="exchange"
                  width={50}
                  height={0}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div>
                <h1>Trade Digital Assets</h1>
              </div>
              <div>
                <p>Easily convert unused Airtime and Giftcards to cash!.</p>
              </div>
            </div>{" "}
          </FadeInUp>{" "}
          <FadeInUp>
            <div className={styles.servicesListGrid}>
              <div>
                <Image
                  src={giftCard}
                  alt="giftcard"
                  width={50}
                  height={0}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
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
              <div>
                <Image
                  src={flight}
                  alt="flight"
                  width={50}
                  height={0}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
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
              <div>
                <Image
                  src={ticket}
                  alt="ticket"
                  width={50}
                  height={0}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div>
                <h1>Event Tickets</h1>
              </div>
              <div>
                <p>Purchase tickets for your favorite shows & events easily.</p>
              </div>
            </div>{" "}
          </FadeInUp>
        </section>
      </section>
    </div>
  );
}
