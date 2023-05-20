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
import Blogger from "/public/images/blogger.svg";
import Note from "/public/images/note-2.svg";
import Work from "/public/images/briefcase.svg";
import Faq from "/public/images/message-search.svg";
import Support from "/public/images/headset.svg";
import Code from "/public/images/code.svg";
import Text from "/public/images/textalign.svg";
import People from "/public/images/people.svg";

import "./index.css";

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
        <div className={styles.openNav}>
          <Image
            src={OpenNav}
            alt="Open Nav"
            width={35}
            height={35}
            onClick={() => {
              toggleVisibility();
              disableScroll();
            }}
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
                  src={logoDark}
                  alt="Bingpay Logo"
                  width={120}
                  height={120}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
            </div>
            <div style={{ padding: "6px" }}>
              <Image
                src={CloseNav}
                alt="Close Nav"
                width={20}
                height={20}
                onClick={() => {
                  toggleVisibility();
                  enableScroll();
                }}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>

          <div className={styles.navMenu}>
            <FadeInUp>
              {" "}
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
                        }}
                      >
                        <Image
                          src={People}
                          alt=""
                          width={22}
                          height={22}
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        Join Waitlist{" "}
                      </Link>
                    </li>
                  </ul>
                </div>{" "}
                <div className={styles.navList}>
                  {" "}
                  <h1>Company</h1>
                  <ul>
                    <li>
                      {" "}
                      <Link
                        href="https://blog.bingpay.ng/"
                        target="_blank onClick={enableScroll}"
                        onClick={enableScroll}
                      >
                        <Image
                          src={Blogger}
                          alt=""
                          width={22}
                          height={22}
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
                        }}
                      >
                        <Image
                          src={Note}
                          alt=""
                          width={25}
                          height={25}
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />{" "}
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
                        href="/FAQs"
                        onClick={() => {
                          toggleVisibility();
                          enableScroll();
                        }}
                      >
                        <Image
                          src={Faq}
                          alt=""
                          width={25}
                          height={25}
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        onClick={() => {
                          toggleVisibility();
                          enableScroll();
                        }}
                      >
                        <Image
                          src={Support}
                          alt=""
                          width={25}
                          height={25}
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
                        }}
                      >
                        <Image
                          src={Text}
                          alt=""
                          width={25}
                          height={25}
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
                        }}
                      >
                        <Image
                          src={Code}
                          alt=""
                          width={25}
                          height={25}
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        Documentation
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
