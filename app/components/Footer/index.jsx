"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const DownloadApp = dynamic(() => import("./DownloadAppBanner/index"), {
  ssr: false,
});

const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 500); // Adjust the delay duration (in milliseconds) as needed
};

import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.bg}>
      <section className={styles.footer}>
        <DownloadApp />
        <div className={styles.footerContext}>
          <hgroup className={styles.footerIntro}>
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
            <p>
              Bingpay.ng is a property of Trilbertech Limited, a company
              registered with RC Number: 1832078 under the Laws of the Federal
              Republic of Nigeria.
            </p>
          </hgroup>
          <div className={styles.footerList}>
            <h1>Company</h1>
            <ul>
              <li className={styles.hover}>
                <Link href="https://blog.bingpay.ng/" target="_blank">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/developers" onClick={scrollToTop}>
                  Developers
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h1>Support</h1>
            <ul>
              <li>
                <Link href="/help-center" onClick={scrollToTop}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" onClick={scrollToTop}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" onClick={scrollToTop}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/aml-policy" onClick={scrollToTop}>
                  AML/KYC Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h1>Contact Us</h1>
            <p>
              11 Ada George Road, <br></br> Port Hacourt, NG 500027.
            </p>
            <ul>
              <li className={styles.link}>
                <a href="mailto:hello@bingpay.ng">hello@bingpay.ng</a>
              </li>
            </ul>
            <div className={styles.Socials}>
              <ul>
                <li>
                  <Link
                    href="https://www.instagram.com/bingpay/"
                    target="_blank"
                  >
                    <Image
                      src="/instagram.svg"
                      alt="instagram"
                      width={34}
                      height={34}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/bingpayng" target="_blank">
                    <Image
                      src="/twitter.svg"
                      alt="twitter"
                      width={30}
                      height={30}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://web.facebook.com/Bingpayng/?_rdc=1&_rdr"
                    target="_blank"
                  >
                    <Image
                      src="/facebook.svg"
                      alt="facebook"
                      width={30}
                      height={30}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footerBottom}>
        <span>
          © 2021-2023 Bingpay.ng. Trilbertech Ltd (RC No.1832078). All rights
          reserved.
        </span>
      </section>
    </div>
  );
}
