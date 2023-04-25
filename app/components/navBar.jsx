import Image from "next/image";
import logoDark from "/public/logo-dark.webp";
import downArrow from "/public/down-arrow.svg";
import Link from "next/link";
import styles from "./navBar.module.css";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

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

  return (
    <div>
      <div className={`${montserrat.variable}`}>
        <section className={styles.navBar}>
          <div>
            <Image
              src={logoDark}
              alt="Bingpay logo"
              width={120}
              height={120}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className={styles.navLinks}>
            <span className={styles.Links}>
              {" "}
              <Link href="/">Business</Link>
            </span>
            <span className={styles.Links}>
              {" "}
              <Link href="/">Company</Link>
              <Image
                src={downArrow}
                alt=""
                width={15}
                height={15}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={styles.dropBg}>
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
              </div>
            </span>
            <span className={styles.Links}>
              {" "}
              <Link href="/">Developers</Link>
            </span>
            <span className={styles.Links}>
              {" "}
              <Link href="/">Support</Link>
              <Image
                src={downArrow}
                alt=""
                width={15}
                height={15}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={styles.dropBg}>
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
              </div>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
