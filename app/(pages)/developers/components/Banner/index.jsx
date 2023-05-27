"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <main className={styles.Hero}>
        <section className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <hgroup>
              <h1>Seamless Integrations with Bingpay APIs.</h1>
              <p>
                Our well-documented APIs lets you build and launch simple or
                complex financial products.
              </p>
            </hgroup>

            <div className={styles.heroSocials}>
              <div>
                <span className={styles.btn}>
                  <FadeInUp>
                    <Link
                      href="https://documenter.getpostman.com/view/17112744/U16nKPpt"
                      target="_blank"
                    >
                      <button>
                        Documentation
                        <Image
                          src="/arrow-up-right.svg"
                          alt="right arrow"
                          width={20}
                          height={0}
                          priority
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                      </button>
                    </Link>
                  </FadeInUp>
                </span>
              </div>
            </div>
          </div>
          <picture className={styles.heroImage}>
            <FadeInUp>
              <Image
                src="/developer.png"
                alt="developer"
                width={300}
                height={300}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </FadeInUp>
          </picture>
        </section>
      </main>
    </>
  );
}
