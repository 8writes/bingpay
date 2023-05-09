import Image from "next/image";
import logoDark from "/public/images/logo-dark.png";
import downArrow from "/public/images/down-arrow.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./index.module.css";
import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    const navBar = document.querySelector(`.${styles.navBar}`);
    // Add or remove the "scrollNav" class based on the scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navBar.classList.add(styles.scrollNav);
      } else {
        navBar.classList.remove(styles.scrollNav);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FadeInUp = {
    offscreen: {
      y: -10,
      opacity: 0,
    },

    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.9,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <div>
      <div>
        <section className={styles.navBarBg}>
          {" "}
          <div className={styles.navBar}>
            <div>
              <Link href="/">
                <Image
                  src={logoDark}
                  alt="Bingpay logo"
                  width={120}
                  height={120}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
            </div>
            <div className={styles.navLinks}>
              <span className={styles.links}>
                {" "}
                <Link href="/">Business</Link>
              </span>
              <motion.span
                className={styles.links}
                whileHover="open"
                whileTap="closed"
              >
                {" "}
                <Link href="/">Company</Link>{" "}
                <Image
                  src={downArrow}
                  alt="Bingpay logo"
                  width={20}
                  height={20}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <motion.div
                  className={styles.dropBg}
                  initial="offscreen"
                  variants={FadeInUp}
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <div class={styles.dropContent}>
                    <ul>
                      <li>
                        <Link href="/">Blog</Link>
                      </li>
                      <li>
                        <Link href="/">About Us</Link>
                      </li>
                      <li>
                        <Link href="/">Join Our Team</Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.span>
              <span className={styles.links}>
                {" "}
                <Link href="../developers">Developers</Link>
              </span>
              <span className={styles.links}>
                {" "}
                <Link href="/">Support</Link>
                <Image
                  src={downArrow}
                  alt="Bingpay logo"
                  width={20}
                  height={20}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <motion.div
                  className={styles.dropBg}
                  initial="offscreen"
                  variants={FadeInUp}
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <div class={styles.dropContent}>
                    <ul>
                      <li>
                        <Link href="/">FAQs</Link>
                      </li>
                      <li>
                        <Link href="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
