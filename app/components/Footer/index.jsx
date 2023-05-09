"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const DownloadApp = dynamic(() => import("../DownloadAppBanner/index"), {
  ssr: false,
});

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
            <Image
              src={logoDark}
              alt="Picture of the author"
              width={120}
              height={120}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
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
              <li>Blog</li>
              <li>About Us</li>
              <li>Join Our Team</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h1>Support</h1>
            <ul>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>AML/KYC Policy</li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h1>Contact Us</h1>
            <ul>
              <li>
                11 Ada George Road, <br></br> Port Hacourt, NG 500027.
              </li>
              <li>
                <a href="mailto:hello@bingpay.ng">hello@bingpay.ng</a>
              </li>
            </ul>
            <div className={styles.Socials}>
              <ul>
                <li>
                  {" "}
                  <a href="https://www.instagram.com/bingpay/" target="_blank">
                    <Image
                      src={instagram}
                      alt="list"
                      width={34}
                      height={0}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://twitter.com/bingpayng" target="_blank">
                    <Image
                      src={twitter}
                      alt="list"
                      width={30}
                      height={0}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
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
                  </a>
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