import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logoDark from "/public/images/logo-dark.png";
import GooglePlay from "/public/images/google-play.svg";
import AppStore from "/public/images/app-store.svg";
import OpenNav from "/public/images/mobile-menu-opn.svg";
import CloseNav from "/public/images/mobile-menu-cls.svg";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

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
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
export default function MobileNav() {
  useEffect(() => {
    const navBar = document.querySelector(`.${styles.mobileNav}`);
    // Add or remove the "scrollMobileNav" class based on the scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navBar.classList.add(styles.scrollMobileNav);
      } else {
        navBar.classList.remove(styles.scrollMobileNav);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <section className={styles.mobileNav}>
        <div>
          <Link href="/">
            <Image
              src={logoDark}
              alt="Bingpay Logo"
              width={120}
              height={120}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Link>
        </div>
        <div onClick={toggleVisibility}>
          <Image
            src={OpenNav}
            alt="Open Nav"
            width={35}
            height={35}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </section>
      <section id="ToggleNav" style={{ display: isVisible ? "block" : "none" }}>
        <div className={styles.navContents}>
          <div className={styles.mobileNavInner}>
            <div>
              <Link href="/" onClick={toggleVisibility}>
                <Image
                  src={logoDark}
                  alt="Bingpay Logo"
                  width={120}
                  height={120}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
            </div>
            <div onClick={toggleVisibility} style={{ padding: "6px" }}>
              <Image
                src={CloseNav}
                alt="Close Nav"
                width={20}
                height={20}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>
          <motion.div
            className={styles.navMenu}
            initial="offscreen"
            variants={FadeInUp}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
            <div className={styles.navLinks}>
              <div className={styles.navList}>
                <h1>Business</h1>
                <ul>
                  <li>Join Waitlist</li>
                </ul>
              </div>{" "}
              <div className={styles.navList}>
                {" "}
                <h1>Company</h1>
                <ul>
                  <li>Blog</li>
                  <li>About Us</li>
                  <li>Join Our Team</li>
                  <li>
                    <Link href="../developers" onClick={toggleVisibility}>
                      Developers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.navList}>
                <h1>Support</h1>
                <ul>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>AML/KYC Policy</li>
                </ul>
              </div>
              <div className={styles.heroSocials}>
                <div>
                  {" "}
                  <a
                    href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}
                  >
                    <Image
                      src={AppStore}
                      alt="App Store"
                      width={146}
                      height={146}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </a>
                </div>
                <div>
                  <a
                    href={
                      "https://play.google.com/store/apps/details?id=com.bingpay.bing_pay"
                    }
                  >
                    <Image
                      src={GooglePlay}
                      alt="Google Play"
                      width={160}
                      height={160}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </a>
                </div>{" "}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}