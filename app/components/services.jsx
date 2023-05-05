import styles from "./services.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import list from "/public/images/list.svg";
import giftCard from "/public/images/gift-card.svg";
import exchange from "/public/images/exchange.svg";
import ticket from "/public/images/ticket.svg";
import topUp from "/public/images/top-up.svg";
import flight from "/public/images/flight.svg";

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
        bounce: 0.6,
        duration: 0.9,
        ease: [0, 0.71, 0.2, 1.01],
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
          viewport={{ once: true, amount: 0 }}
        >
          <div>
            <h1>Value for your money</h1>
          </div>
          <motion.div
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
          >
            <p>
              Bingpay unlocks possibilities of making payments for millions of
              goods and services.
            </p>
          </motion.div>
        </motion.section>
        <section className={styles.servicesList}>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
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
                Pay Electricity bills, Internet bundles & Cable TV subscriptions.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
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
                Top-up airtime and data globally, we cover over 50+
                countries.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
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
                Easily convert unused Airtime and Giftcards to cash!.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
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
            viewport={{ once: true, amount: 0 }}
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
                Book international and domestic flights, hotels for holidays.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.servicesListGrid}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
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
                Purchase tickets for your favorite shows & events easily.
              </p>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
}
