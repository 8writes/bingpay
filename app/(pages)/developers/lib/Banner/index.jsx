"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Developers from "/public/developer.png";
import Arrow from "/public/arrow-up-right.svg";

const Button = dynamic(() => import("../../components/Button"), {
  ssr: false,
});

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

export default function Banner() {
  return (
    <>
      <section className={styles.Hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <hgroup>
              <h1>Seamless Integrations with Bingpay APIs.</h1>
              <p>
                Our well-documented APIs lets you build and launch simple or
                complex financial products.
              </p>
            </hgroup>
            <div className={styles.heroSocials}>
              <span className={styles.btn}>
                <FadeInUp>
                  <Link
                    href="https://documenter.getpostman.com/view/17112744/U16nKPpt"
                    target="_blank"
                  >
                    <Button>
                      Documentation
                      <Image
                        src={Arrow}
                        alt="right arrow"
                        width={20}
                        height={0}
                        priority
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                      />
                    </Button>
                  </Link>
                </FadeInUp>
              </span>
            </div>
          </div>
          <picture className={styles.heroImage}>
            <FadeInUp>
              <Image
                src={Developers}
                alt="developer"
                width={300}
                height={300}
                priority
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </FadeInUp>
          </picture>
        </div>
      </section>
    </>
  );
}
