"use client";

import dynamic from "next/dynamic";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./index.module.css";
import logoDark from "/public/images/logo-dark.png";
import downArrow from "/public/images/down-arrow.svg";

const FadeInDown = dynamic(() => import("./Framer/FadeInDown"), {
  ssr: false,
});

const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 400); // Adjust the delay duration (in milliseconds) as needed
};

export default function NavBar() {
  useEffect(() => {
    const navBar = document.querySelector(`.${styles.navBar}`);
    // Add or remove the "scrollNav" class based on the scroll position
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      <div>
        <section className={styles.navBarBg}>
          {" "}
          <div className={styles.navBar}>
            <div>
              <Link href="/" onClick={scrollToTop}>
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
                <Link href="business">Business</Link>
              </span>
              <span className={styles.links}>
                {" "}
                <span>Company</span>{" "}
                <Image
                  src={downArrow}
                  alt="Bingpay logo"
                  width={20}
                  height={20}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div className={styles.dropBg}>
                  {" "}
                  <FadeInDown>
                    <div class={styles.dropContent}>
                      <ul>
                        <li>
                          <Link href="https://blog.bingpay.ng/" target="_blank">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link href="about-us">About Us</Link>
                        </li>
                        <li>
                          Join Our Team
                        </li>
                      </ul>
                    </div>{" "}
                  </FadeInDown>
                </div>
              </span>
              <span className={styles.links}>
                {" "}
                <Link href="developers">Developers</Link>
              </span>
              <span className={styles.links}>
                {" "}
                <span>Support</span>
                <Image
                  src={downArrow}
                  alt="Bingpay logo"
                  width={20}
                  height={20}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div className={styles.dropBg}>
                  <FadeInDown>
                    <div class={styles.dropContent}>
                      <ul>
                        <li>
                          <Link href="FAQs">FAQs</Link>
                        </li>
                        <li>
                          <Link href="contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>{" "}
                  </FadeInDown>
                </div>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
