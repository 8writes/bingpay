"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

import Bills from "/public/images/postpaid-bill.png";
import GiftCard from "/public/images/gift-card.webp";
import Identity from "/public/images/identity.webp";
import Cash from "/public/images/cash.webp";
import Swap from "/public/images/swap.webp";
import MobileChat from "/public/images/mobile-chat.webp";
import ArrowRight from "/public/images/caret-right.svg";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

const FadeInRight = dynamic(() => import("./Framer/FadeInRight"), {
  ssr: false,
});

const FadeInLeft = dynamic(() => import("./Framer/FadeInLeft"), {
  ssr: false,
});

const FadeInDown = dynamic(() => import("./Framer/FadeInDown"), {
  ssr: false,
});

export default function Section() {
  return (
    <>
      <main className={styles.section}>
        {" "}
        <section className={styles.sectionContent}>
          <hgroup className={styles.sectionIntro}>
            <FadeInUp>
              {" "}
              <h1>What do we Offer?</h1>
              <p>
                We Simplify, secure and speed up your backend processes with our
                API library.
              </p>
            </FadeInUp>
          </hgroup>
          <section className={styles.sectionListL}>
            <picture className={styles.sectionImgL}>
              <FadeInLeft>
                <Image
                  src={Bills}
                  alt="bills image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />{" "}
              </FadeInLeft>
            </picture>
            <div className={styles.sectionContextL}>
              <FadeInUp>
                <h1>Bills Payment API</h1>
                <p>
                  Allow your customers pay for several kinds of bills ranging
                  from airtime, data, cable TV, education, electricity and
                  insurance.
                </p>
                <Link
                  href="https://documenter.getpostman.com/view/17112744/U16nKPpt#646b1f19-123b-452e-8d44-aa8d458995cc"
                  target="_blank"
                >
                  <span className={styles.sectionLink}>
                    <p>Explore Our APIs </p>
                    <Image
                      src={ArrowRight}
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </span>
                </Link>
              </FadeInUp>
            </div>
          </section>
          <section className={styles.sectionListR}>
            <div className={styles.sectionContextR}>
              <FadeInUp>
                <h1>Giftcard API</h1>
                <p>
                  Allow your customers pay for several kinds of bills ranging
                  from airtime, data, cable TV, education, electricity and
                  insurance.
                </p>
                <Link
                  href="https://documenter.getpostman.com/view/17112744/U16nKPpt#873e2a8a-2a49-43a0-ada4-1bd18c0d2d29"
                  target="_blank"
                >
                  <span className={styles.sectionLink}>
                    <p>Explore Our APIs </p>
                    <Image
                      src={ArrowRight}
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </span>
                </Link>
              </FadeInUp>
            </div>
            <picture className={styles.sectionImgR}>
              <FadeInRight>
                <Image
                  src={GiftCard}
                  alt="gift-card image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />{" "}
              </FadeInRight>
            </picture>
          </section>
          <section className={styles.sectionListL}>
            <picture className={styles.sectionImgL}>
              <FadeInLeft>
                <Image
                  src={Identity}
                  alt="identity image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />{" "}
              </FadeInLeft>
            </picture>
            <div className={styles.sectionContextL}>
              <FadeInUp>
                <h1>Identity API</h1>
                <p>
                  Allow your customers pay for several kinds of bills ranging
                  from airtime, data, cable TV, education, electricity and
                  insurance.
                </p>
                <Link
                  href="https://documenter.getpostman.com/view/17112744/U16nKPpt#d4f415fd-6925-4590-9ced-5b52dc394d3d"
                  target="_blank"
                >
                  <span className={styles.sectionLink}>
                    <p>Explore Our APIs </p>
                    <Image
                      src={ArrowRight}
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </span>
                </Link>
              </FadeInUp>
            </div>
          </section>
          <section className={styles.sectionListR}>
            <div className={styles.sectionContextR}>
              <FadeInUp>
                <h1>Payouts API</h1>
                <p>
                  Allow your customers pay for several kinds of bills ranging
                  from airtime, data, cable TV, education, electricity and
                  insurance.
                </p>
                <Link
                  href="https://documenter.getpostman.com/view/17112744/U16nKPpt#ea1ff7fa-7c5b-4e81-9116-e33d3abacd8c"
                  target="_blank"
                >
                  <span className={styles.sectionLink}>
                    <p>Explore Our APIs </p>
                    <Image
                      src={ArrowRight}
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </span>
                </Link>
              </FadeInUp>
            </div>
            <picture className={styles.sectionImgR}>
              <FadeInRight>
                <Image
                  src={Cash}
                  alt="cash image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />{" "}
              </FadeInRight>
            </picture>
          </section>
          <section className={styles.sectionListL}>
            <picture className={styles.sectionImgL}>
              <FadeInLeft>
                <Image
                  src={Swap}
                  alt="swap image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />{" "}
              </FadeInLeft>
            </picture>
            <div className={styles.sectionContextL}>
              <FadeInUp>
                <h1>Trading API</h1>
                <p>
                  Allow your customers pay for several kinds of bills ranging
                  from airtime, data, cable TV, education, electricity and
                  insurance.
                </p>
                <Link
                  href="https://documenter.getpostman.com/view/17112744/U16nKPpt#eada56d0-81fe-4369-ad90-d635d3a9f185"
                  target="_blank"
                >
                  <span className={styles.sectionLink}>
                    <p>Explore Our APIs </p>
                    <Image
                      src={ArrowRight}
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </span>
                </Link>
              </FadeInUp>
            </div>
          </section>
          <section className={styles.sectionListR}>
            <div className={styles.sectionContextR}>
              <FadeInUp>
                <h1>SMS Marketing API</h1>
                <p>
                  Allow your customers pay for several kinds of bills ranging
                  from airtime, data, cable TV, education, electricity and
                  insurance.
                </p>
                <Link
                  href="https://documenter.getpostman.com/view/17112744/U16nKPpt"
                  target="_blank"
                >
                  <span className={styles.sectionLink}>
                    <p>Explore Our APIs </p>
                    <Image
                      src={ArrowRight}
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />{" "}
                  </span>
                </Link>
              </FadeInUp>
            </div>
            <picture className={styles.sectionImgR}>
              <FadeInRight>
                <Image
                  src={MobileChat}
                  alt="mobile chat image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />{" "}
              </FadeInRight>
            </picture>
          </section>
        </section>
      </main>
    </>
  );
}
