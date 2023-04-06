import styles from "./services.module.css";
import Image from "next/image";
import { Space_Grotesk, Quicksand, Montserrat } from "next/font/google";
import list from "/public/list.svg";
import giftCard from "/public/gift-card.svg";
import exchange from "/public/exchange.svg";
import ticket from "/public/ticket.svg";
import topUp from "/public/top-up.svg";
import flight from "/public/flight.svg";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
  display: "swap",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function Services() {
  return (
    <div>
      <div
        className={`${styles.services} ${space_grotesk.variable} ${quicksand.variable} ${montserrat.variable}`}
      >
        <section className={styles.serviceIntro}>
          <span>
            <h1>Value for your money</h1>
          </span>
          <span>
            <p>
              Bingpay unlocks possibilities of making payments for millions of
              goods and services in one app.
            </p>
          </span>
        </section>
        <section className={styles.servicesList}>
          <div className={styles.servicesListGrid}>
            <div>
              <Image
                src={list}
                alt=""
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
                subscriptions on bingpay.
              </p>
            </div>
          </div>
          <div className={styles.servicesListGrid}>
            <div>
              <Image
                src={topUp}
                alt=""
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
                Top-up airtime and data globally, spanning coverage of 50+
                countries.
              </p>
            </div>
          </div>
          <div className={styles.servicesListGrid}>
            <div>
              <Image
                src={exchange}
                alt=""
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
              <p>
                Easily convert unused Airtime, Giftcards to cash on your bingpay
                app.
              </p>
            </div>
          </div>
          <div className={styles.servicesListGrid}>
            <div>
              <Image
                src={giftCard}
                alt=""
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
                Thousands of brands to buy Giftcards directly from your Bingpay
                wallet.
              </p>
            </div>
          </div>
          <div className={styles.servicesListGrid}>
            <div>
              <Image
                src={flight}
                alt=""
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
                Book international and domestic flights, hotels and holidays
                with Bingpay.
              </p>
            </div>
          </div>
          <div className={styles.servicesListGrid}>
            <div>
              <Image
                src={ticket}
                alt=""
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
              <p>
                Purchase tickets for your favorite shows & events easily from
                your bingpay app.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
