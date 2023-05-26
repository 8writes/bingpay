"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./index.module.css";
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
          <div className={styles.navBar}>
            <div>
              <Link href="/">
                <Image
                  src="/logo-dark.png"
                  alt="Bingpay logo"
                  width={115}
                  height={0}
                  onClick={scrollToTop}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
            </div>
            <div className={styles.navLinks}>
              <span className={styles.links}>
                <Link href="business">Business</Link>
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
                              width={25}
                              height={0}
                              priority
                              // blurDataURL="data:..." automatically provided
                              // placeholder="blur" // Optional blur-up while loading
                            />
                            <span>Blog</span>
                          </li>
                        </Link>
                        <Link href="about-us">
                          <li>
                            <Image
                              src="/note-2.svg"
                              alt=""
                              width={26}
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
                  height={15}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div className={styles.dropBg}>
                  <FadeInDown>
                    <div class={styles.dropContent}>
                      <ul>
                        <Link href="/developers">
                          <li>
                            <Image
                              src="/textalign.svg"
                              alt=""
                              width={20}
                              height={20}
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
                              width={25}
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
                  alt="Bingpay logo"
                  width={15}
                  height={15}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div className={styles.dropBg}>
                  <FadeInDown>
                    <div class={styles.dropContent}>
                      <ul>
                        <Link href="help-center">
                          <li>
                            <Image
                              src="/message-search.svg"
                              alt=""
                              width={25}
                              height={0}
                              priority
                              // blurDataURL="data:..." automatically provided
                              // placeholder="blur" // Optional blur-up while loading
                            />
                            <span>Help Center</span>
                          </li>
                        </Link>
                        <Link href="contact-us">
                          <li>
                            <Image
                              src="/headset.svg"
                              alt=""
                              width={25}
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
      </div>
    </div>
  );
}
