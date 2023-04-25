import DownloadApp from "./downloadApp";
import styles from "./footer.module.css";
import logoDark from "/public/logo-dark.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.bg}>
      <div>
        <DownloadApp />
      </div>
      <section className={styles.footer}>
        <div className={styles.footerContext}>
          <div>
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
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.footerList}>
            {" "}
            <h1>Company</h1>
            <ul>
              <li>Blog</li>
              <li>About Us</li>
              <li>Join Our Team</li>
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
              <li>11 Ada George Road, Port Hacourt, NG 500027</li>
              <li>hello@bingpay.ng</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.footerBottom}>
        <div>
          <span>
            © 2023 Bingpay.ng. Trilbertech Ltd (RC No.1832078). All rights
            reserved.
          </span>
        </div>
        <div></div>
      </section>
    </div>
  );
}
