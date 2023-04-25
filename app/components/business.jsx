import Image from "next/image";
import Merchant from "/public/merchant.svg";
import styles from "./business.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Business() {
  const FadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    ease: "easeOut",
  };

  const FadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    ease: "easeOut",
  };

  const [ref1, inView1] = useInView({ threshold: 0 });
  const [ref2, inView2] = useInView({ threshold: 0 });

  return (
    <div>
      <div className={styles.bg}>
        <section className={styles.business}>
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            exit="exit"
            variants={FadeInRight}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.introMobile}>
              <h1>Bingpay for Business 💸</h1>
            </span>
            <div>
              <Image
                src={Merchant}
                alt="App Store"
                width={500}
                height={500}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />{" "}
            </div>{" "}
          </motion.div>

          <div className={styles.businessContext}>
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              exit="exit"
              variants={FadeInLeft}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
