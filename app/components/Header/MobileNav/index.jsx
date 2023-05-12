"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import logoDark from "/public/images/logo-dark.png";
import GooglePlay from "/public/images/google-play.svg";
import AppStore from "/public/images/app-store.svg";
import OpenNav from "/public/images/mobile-menu-opn.svg";
import CloseNav from "/public/images/mobile-menu-cls.svg";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

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

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300); // Adjust the delay duration (in milliseconds) as needed
  };

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
              onClick={scrollToTop}
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
                  onClick={scrollToTop}
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

          <div className={styles.navMenu}>
            <FadeInUp>
              <div className={styles.navLinks}>
                <div className={styles.navList}>
                  <h1>Business</h1>
                  <ul>
                    <Link href="/">Join Waitlist</Link>
                  </ul>
                </div>{" "}
                <div className={styles.navList}>
                  {" "}
                  <h1>Company</h1>
                  <ul>
                    <li>
                      {" "}
                      <Link href="https://blog.bingpay.ng/" target="_blank">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" onClick={toggleVisibility}>
                        About Us
                      </Link>
                    </li>
                    <li>Join Our Team</li>
                    <li>
                      <Link href="/developers" onClick={toggleVisibility}>
                        Developers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.navList}>
                  <h1>Support</h1>
                  <ul>
                    <li>
                      <Link href="/FAQs" onClick={toggleVisibility}>
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" onClick={toggleVisibility}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.heroSocials}>
                  <div>
                    {" "}
                    <a
                      href={
                        "https://apps.apple.com/uy/app/bingpay/id1589089598"
                      }
                      target="_blank"
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
                      target="_blank"
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
              </div>{" "}
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
