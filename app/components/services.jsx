import styles from "./services.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const [ref1, inView1] = useInView({ threshold: 0 });
  const [ref2, inView2] = useInView({ threshold: 0 });
  const [ref3, inView3] = useInView({ threshold: 0 });

  return (
    <div>
      <section className={`${styles.services} ${space_grotesk.variable}`}>
        <motion.section
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          exit="exit"
          variants={FadeInUp}
          transition={{ duration: 0.5 }}
        >
          <section className={styles.serviceIntro}>
            <div>
              <h1>Value for your money</h1>
            </div>
            <div>
              <p>
                Bingpay unlocks possibilities of making payments for millions of
                goods and services.
              </p>
            </div>
          </section>
        </motion.section>{" "}
        <motion.section
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          exit="exit"
          variants={FadeInUp}
          transition={{ duration: 0.5 }}
        >
          <section className={styles.servicesList}>
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
                  subscriptions on bingpay.
                </p>
              </div>
            </div>
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
                    Top-up airtime and data globally, spanning coverage of 50+
                    countries.
                  </p>
                </div>
              </div>
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
                  <p>
                    Easily convert unused Airtime, Giftcards to cash on your
                    bingpay app.
                  </p>
                </div>
            </div>
          </section>
          </motion.section>
           <motion.section
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          exit="exit"
          variants={FadeInUp}
          transition={{ duration: 0.5 }}
        >
          <section className={styles.servicesList}>
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
                    Book international and domestic flights, hotels and holidays
                    with Bingpay.
                  </p>
                </div>
              </div>
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
                  <p>
                    Purchase tickets for your favorite shows & events easily
                    from your bingpay app.
                  </p>
                </div>
              </div>
            </section>
        </motion.section>
        </section>
    </div>
  );
}
