"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});
const FadeInRight = dynamic(() => import("./Framer/FadeInRight"), {
  ssr: false,
});
const FadeInLeft = dynamic(() => import("./Framer/FadeInLeft"), {
  ssr: false,
});

export default function Section() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <hgroup className={styles.sectionIntro}>
            <FadeInUp>
              <h1>What do we Offer?</h1>
              <p>
                Simplify, secure and speed up your backend processes with our
                API library.
              </p>
            </FadeInUp>
          </hgroup>
          <section className={styles.sectionListL}>
            <picture className={styles.sectionImgL}>
              <FadeInLeft>
                <Image
                  src="/postpaid-bill.png"
                  alt="bills image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
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
                      src="/caret-right.svg"
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
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
                      src="/caret-right.svg"
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </span>
                </Link>
              </FadeInUp>
            </div>
            <picture className={styles.sectionImgR}>
              <FadeInRight>
                <Image
                  src="/gift-card.webp"
                  alt="gift-card image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </FadeInRight>
            </picture>
          </section>
          <section className={styles.sectionListL}>
            <picture className={styles.sectionImgL}>
              <FadeInLeft>
                <Image
                  src="/identity.webp"
                  alt="identity image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
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
                      src="/caret-right.svg"
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
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
                      src="/caret-right.svg"
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </span>
                </Link>
              </FadeInUp>
            </div>
            <picture className={styles.sectionImgR}>
              <FadeInRight>
                <Image
                  src="/cash.webp"
                  alt="cash image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </FadeInRight>
            </picture>
          </section>
          <section className={styles.sectionListL}>
            <picture className={styles.sectionImgL}>
              <FadeInLeft>
                <Image
                  src="/swap.webp"
                  alt="swap image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
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
                      src="/caret-right.svg"
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
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
                      src="/caret-right.svg"
                      alt="arrow right"
                      width={42}
                      height={42}
                      priority
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </span>
                </Link>
              </FadeInUp>
            </div>
            <picture className={styles.sectionImgR}>
              <FadeInRight>
                <Image
                  src="/mobile-chat.webp"
                  alt="mobile chat image"
                  width={350}
                  height={350}
                  priority
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </FadeInRight>
            </picture>
          </section>
        </div>
      </section>
    </>
  );
}
