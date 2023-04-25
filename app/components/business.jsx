import Image from "next/image";
import Merchant from "/public/merchant.svg";
import styles from "./business.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Business() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const FadeInRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  const FadeInLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div>
      <div className={styles.bg}>
        <section className={styles.business}>
          <span className={styles.introMobile}>
            <h1>Bingpay for Business 💸</h1>
          </span>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FadeInLeft}
            transition={{ duration: 0.5 }}
          >
            <div>
              <Image
                src={Merchant}
                alt="App Store"
                width={500}
                height={500}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />{" "}
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FadeInRight}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.businessContext}>
              <span className={styles.intro}>
                <h1>Bingpay for Business 💸</h1>
              </span>
              <span className={styles.heading}>
                <h1> Accept payments instantly with Bingpay!</h1>
              </span>
              <p>
                With Bingpay business, you can accept payment with your merchant
                ID, make bulk transactions with discounts, get access to our
                developer APIs and reach more audience with SMS marketing.
              </p>
              <span className={styles.btn}>
                <button>Join Waitlist</button>
              </span>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
