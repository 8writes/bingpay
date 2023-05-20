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
  }, 400); // Adjust the delay duration (in milliseconds) as needed
};

import styles from "./index.module.css";
import logoDark from "/public/images/logo-dark.png";
import twitter from "/public/images/twitter.svg";
import instagram from "/public/images/instagram.svg";
import facebook from "/public/images/facebook.svg";

export default function Footer() {
  return (
    <div className={styles.bg}>
      {" "}
      <section className={styles.footer}>
        {" "}
        <DownloadApp />
        <div className={styles.footerContext}>
          <div className={styles.footerIntro}>
            <Link href="/">
              <Image
                src={logoDark}
                alt="Picture of the author"
                width={120}
                height={120}
                onClick={scrollToTop}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
            <p>
              Bingpay.ng is a property of Trilbertech Limited, a company
              registered with RC Number: 1832078 under the Laws of the Federal
              Republic of Nigeria.
            </p>
          </div>
          <div className={styles.footerList}>
            {" "}
            <h1>Company</h1>
            <ul>
              <li className={styles.hover}>
                {" "}
                <Link href="https://blog.bingpay.ng/" target="_blank">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="about-us">
                  About Us
                </Link>
              </li>{" "}
    
              <li>
                <Link href="developers">
                  Developers
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h1>Support</h1>
            <ul>
              <li>
                <Link href="FAQs">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="terms">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="AML-KYC-policy">
                  AML/KYC Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h1>Contact Us</h1>
            <p>
              {" "}
              11 Ada George Road, <br></br> Port Hacourt, NG 500027.
            </p>
            <ul>
              <li>
                <a href="mailto:hello@bingpay.ng">hello@bingpay.ng</a>
              </li>
            </ul>
            <div className={styles.Socials}>
              <ul>
                <li>
                  {" "}
                  <Link href="https://www.instagram.com/bingpay/" target="_blank">
                    <Image
                      src={instagram}
                      alt="list"
                      width={34}
                      height={0}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="https://twitter.com/bingpayng" target="_blank">
                    <Image
                      src={twitter}
                      alt="list"
                      width={30}
                      height={0}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="https://web.facebook.com/Bingpayng/?_rdc=1&_rdr"
                    target="_blank"
                  >
                    <Image
                      src={facebook}
                      alt="list"
                      width={30}
                      height={0}
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
