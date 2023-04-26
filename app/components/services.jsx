import styles from "./services.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
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

export default function Services() {
  const FadeInUp = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <section className={`${styles.services} ${space_grotesk.variable}`}>
        <motion.section
          className={styles.serviceIntro}
          initial="offscreen"
          variants={FadeInUp}
          whileInView="onscreen"
          viewport={{ once: false, amount: 0 }}
        >
          <div>
            <h1>Value for your money</h1>
          </div>
          <div>
            <p>
              Bingpay unlocks possibilities of making payments for millions of
              goods and services.
            </p>
          </div>
        </motion.section>
        <section className={styles.servicesList}>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
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
                Pay Electricity bills, Internet bundles & Cable TV subscriptions
                on bingpay.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
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
                Top-up airtime and data globally, spanning coverage of 50+
                countries.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
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
              <p>
                Easily convert unused Airtime, Giftcards to cash on your bingpay
                app.
              </p>
            </div>
          </motion.div>
        </section>

        <section className={styles.servicesList}>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
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
                Thousands of brands to buy Giftcards directly from your Bingpay
                wallet.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
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
                Book international and domestic flights, hotels and holidays
                with Bingpay.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
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
              <p>
                Purchase tickets for your favorite shows & events easily from
                your bingpay app.
              </p>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
}
