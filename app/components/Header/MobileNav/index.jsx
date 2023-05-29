"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

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

  const [isScrollDisabled, setScrollDisabled] = useState(false);

  const disableScroll = () => {
    document.documentElement.classList.add("disable-scroll");
    setScrollDisabled(true);
  };

  const enableScroll = () => {
    document.documentElement.classList.remove("disable-scroll");
    setScrollDisabled(false);
  };

  return (
    <div className={styles.main}>
      <section className={styles.mobileNav}>
        <picture>
          <Link href="/">
            <Image
              src="/logo-dark.png"
              alt="bingpay logo"
              width={120}
              height={0}
              onClick={scrollToTop}
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Link>
        </picture>
        <div className={styles.openNav}>
          <Image
            src="/mobile-menu-opn.svg"
            alt="Open Nav"
            width={35}
            height={35}
            onClick={() => {
              toggleVisibility();
              disableScroll();
              scrollToTop();
            }}
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </section>
      <section style={{ display: isVisible ? "block" : "none" }}>
        <div className={styles.navContents}>
          <div className={styles.mobileNavInner}>
            <div>
              <Link
                href="/"
                onClick={() => {
                  toggleVisibility();
                  enableScroll();
                  scrollToTop();
                }}
              >
                <Image
                  src="/logo-dark.png"
                  alt="Bingpay Logo"
                  width={120}
                  height={0}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
            </div>
            <div style={{ padding: "6px" }}>
              <Image
                src="/mobile-menu-cls.svg"
                alt="Close Nav"
                width={20}
                height={20}
                onClick={() => {
                  toggleVisibility();
                  enableScroll();
                }}
                priority
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
                    <li>
                      <Link
                        href="/business"
                        onClick={() => {
                          toggleVisibility();
                          enableScroll();
                          scrollToTop();
                        }}
                      >
                        <Image
                          src="/people.svg"
                          alt=""
                          width={22}
                          height={22}
                          priority
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        Overview
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.navList}>
                  <h1>Company</h1>
                  <ul>
                    <li>
                      <Link
                        href="https://blog.bingpay.ng/"
                        target="_blank onClick={enableScroll}"
                        onClick={() => {
                          toggleVisibility();
                          enableScroll();
                          scrollToTop();
                        }}
                      >
                        <Image
                          src="/blogger.svg"
                          alt=""
                          width={22}
                          height={22}
                          priority
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        <span> Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        onClick={() => {
                          toggleVisibility();
                          enableScroll();
                          scrollToTop();
                        }}
                      >
                        <Image
                          src="/note-2.svg"
                          alt=""
                          width={25}
                          height={0}
                          priority
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        <span> About Us</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.navList}>
                  <h1>Support</h1>
                  <ul>
                    <li>
                      <Link
                        href="/help-center"
                        onClick={() => {
                         toggleVisibility();
                         enableScroll();
                         scrollToTop();
                        }}
                      >
                        <Image
                          src="/message-search.svg"
                          alt=""
                          width={25}
                          height={0}
                          priority
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        onClick={() => {
                         toggleVisibility();
                         enableScroll();
                         scrollToTop();
                        }}
                      >
                        <Image
                          src="/headset.svg"
                          alt=""
                          width={25}
                          height={0}
                          priority
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.navList}>
                  <h1>Developers</h1>
                  <ul>
                    <li>
                      <Link
                        href="/developers"
                        onClick={() => {
                         toggleVisibility();
                         enableScroll();
                         scrollToTop();
                        }}
                      >
                        <Image
                          src="/textalign.svg"
                          alt=""
                          width={25}
                          height={0}
                          priority
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://documenter.getpostman.com/view/17112744/U16nKPpt"
                        target="_blank"
                        onClick={() => {
                          toggleVisibility();
                          enableScroll();
                          scrollToTop();
                        }}
                      >
                        <Image
                          src="/code.svg"
                          alt="code"
                          width={25}
                          height={0}
                          priority
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.heroSocials}>
                  <picture>
                    <a
                      href={
                        "https://apps.apple.com/uy/app/bingpay/id1589089598"
                      }
                      target="_blank"
                    >
                      <Image
                        src="/app-store.svg"
                        alt="App Store"
                        width={146}
                        height={146}
                        priority
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                      />
                    </a>
                  </picture>
                  <picture>
                    <a
                      href={
                        "https://play.google.com/store/apps/details?id=com.bingpay.bing_pay"
                      }
                      target="_blank"
                    >
                      <Image
                        src="/google-play.svg"
                        alt="Google Play"
                        width={160}
                        height={160}
                        priority
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                      />
                    </a>
                  </picture>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
