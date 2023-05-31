"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

const FadeInLeft = dynamic(() => import("../../components/Framer/FadeInLeft"), {
  ssr: false,
});

const FadeInRight = dynamic(
  () => import("../../components/Framer/FadeInRight"),
  {
    ssr: false,
  }
);

const FadeInUp = dynamic(() => import("../../components/Framer/FadeInUp"), {
  ssr: false,
});


export default function Section() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContext}>
          <div className={styles.sectionList}>
            <FadeInUp>
              <h1>Reach Out to Us</h1>
            </FadeInUp>
            <FadeInUp>
              <p>
                11 Ada George Road, <br></br> Port Hacourt, Rivers State, NG
                500027.
              </p>
            </FadeInUp>
            <FadeInUp>
              <ul>
                <li className={styles.link}>
                  <a href="mailto:hello@bingpay.ng">hello@bingpay.ng</a>
                </li>
                <li className={styles.liveChat}>
                  <Image
                    src="/headset.svg"
                    alt=""
                    width={25}
                    height={0}
                    priority
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />{" "}
                  <span> Live Support in App</span>
                </li>
              </ul>
            </FadeInUp>
            <div className={styles.Socials}>
              <FadeInUp>
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
              </FadeInUp>
            </div>
          </div>

          <section className={styles.sectionForm}>
            <FadeInUp>
              <p>Get in touch! We look forward to hearing from you.</p>
              <iframe
                title="Contact Form"
                src="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/73fe365d-2c96-4347-b213-dca6d71602d6"
                referrerpolicy="origin"
                sandbox="allow-forms allow-popups allow-scripts"
                width="100%"
                height="600px"
                frameborder="0"
              ></iframe>
            </FadeInUp>
          </section>
        </div>
      </section>
    </>
  );
}
