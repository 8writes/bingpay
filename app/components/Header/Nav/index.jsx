"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./index.module.css";
import Logo from "/public/logo-dark.png";
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
    <>
      <section className={styles.navBarBg}>
        <div className={styles.navBar}>
          <picture>
            <Link href="/">
              <Image
                src={Logo}
                alt="Bingpay logo"
                width={115}
                height={0}
                onClick={scrollToTop}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
          </picture>
          <div className={styles.navLinks}>
            <span className={styles.links}>
              <Link href="business" onClick={scrollToTop}>
                Business
              </Link>
            </span>
            <span className={styles.links}>
              <span>Company</span>
              <Image
                src="/down-arrow.svg"
                alt=""
                width={15}
                height={0}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={styles.dropBg}>
                <FadeInDown>
                  <div class={styles.dropContent}>
                    <ul>
                      <Link href="https://blog.bingpay.ng/" target="_blank">
                        <li>
                          <Image
                            src="/blogger.svg"
                            alt=""
                            width={23}
                            height={0}
                            priority
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                          <span>Blog</span>
                        </li>
                      </Link>
                      <Link href="/about-us" onClick={scrollToTop}>
                        <li>
                          <Image
                            src="/note-2.svg"
                            alt=""
                            width={25}
                            height={0}
                            priority
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                          <span>About Us</span>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </FadeInDown>
              </div>
            </span>
            <span className={styles.links}>
              <span> Developers</span>
              <Image
                src="/down-arrow.svg"
                alt=""
                width={15}
                height={0}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={styles.dropBg}>
                <FadeInDown>
                  <div class={styles.dropContent}>
                    <ul>
                      <Link href="/developers" onClick={scrollToTop}>
                        <li>
                          <Image
                            src="/textalign.svg"
                            alt=""
                            width={17}
                            height={0}
                            priority
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                          <span>Overview</span>
                        </li>
                      </Link>
                      <Link
                        href="https://documenter.getpostman.com/view/17112744/U16nKPpt"
                        target="_blank"
                      >
                        <li>
                          <Image
                            src="/code.svg"
                            alt=""
                            width={22}
                            height={0}
                            priority
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                          <span>Documentation</span>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </FadeInDown>
              </div>
            </span>
            <span className={styles.links}>
              <span>Support</span>
              <Image
                src="/down-arrow.svg"
                alt=""
                width={15}
                height={0}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={styles.dropBg}>
                <FadeInDown>
                  <div class={styles.dropContent}>
                    <ul>
                      <Link href="/help-center" onClick={scrollToTop}>
                        <li>
                          <Image
                            src="/message-search.svg"
                            alt=""
                            width={23}
                            height={0}
                            priority
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                          <span>Help Center</span>
                        </li>
                      </Link>
                      <Link href="/contact-us" onClick={scrollToTop}>
                        <li>
                          <Image
                            src="/headset.svg"
                            alt=""
                            width={23}
                            height={0}
                            priority
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                          <span> Contact Us</span>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </FadeInDown>
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
