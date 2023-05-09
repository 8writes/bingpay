import Image from "next/image";
import Merchant from "/public/images/merchant.svg";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export default function Business() {

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
        bounce: 0.3,
        duration: 1,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <div>
      <div className={styles.bg}>
        <section className={styles.business}>
          <motion.span
            className={styles.introMobile}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h1>Bingpay for Business 💸</h1>
          </motion.span>
          <motion.div
            className={styles.businessImg}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src={Merchant}
              alt="Download Image"
              width={500}
              height={500}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />{" "}
          </motion.div>

          <div className={styles.businessContext}>
            <motion.span
              className={styles.intro}
              initial="offscreen"
              variants={FadeInUp}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h1>Bingpay for Business 💸</h1>
            </motion.span>
            <motion.span
              className={styles.heading}
              initial="offscreen"
              variants={FadeInUp}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h1> Accept payments instantly with Bingpay!</h1>
            </motion.span>
            <motion.span
              initial="offscreen"
              variants={FadeInUp}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <p>
                With Bingpay business, you can accept payment with your merchant
                ID, make bulk transactions with discounts, get access to our
                developer APIs and reach more audience with SMS marketing.
              </p>
            </motion.span>
            <motion.span
              className={styles.btn}
              initial="offscreen"
              variants={FadeInUp}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <button>Join Waitlist</button>
            </motion.span>
          </div>
        </section>
      </div>
    </div>
  );
}
