"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
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
                  By simply integrating Bingpay gift card APIs, your customers
                  will be able to make gift cards or digital goods purchases
                  worldwide.
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
                  Plug us into your KYC workflow and seamlessly verify bank
                  accounts, NINs and BVNs or use our data to develop credit
                  scores on your financial products.
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
                  Make payouts to any bank account seamlessly using with
                  Bingpay's APIs and software solutions.
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
                  Enable your your customers convert their unused airtime or
                  gift cards to cash or receive airtime payments from them.
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
                  Engage your customers with promotional messages or verify
                  phone numbers across channels like sms, voice and whatsapp.
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
