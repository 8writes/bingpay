import styles from "./heroSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk, Montserrat } from "next/font/google";
import BingHero from "/public/bing-hero.png";
import GooglePlay from "/public/google-play.svg";
import AppStore from "/public/app-store.svg";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function HeroSection() {
  const FadeInUp = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.9,
      },
    },
  };

  const FadeInRight = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.9,
        ease: "easeIn",
      },
    },
  };

  const FadeInDown = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.9,
        ease: "easeIn",
      },
    },
  };

  return (
    <div>
      <section
        className={`${styles.heroSection} ${space_grotesk.variable} ${montserrat.variable}`}
      >
        <div className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <motion.div
              initial="offscreen"
              variants={FadeInDown}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h1>
                Your one stop app for <br></br> everyday{" "}
                <span className="">payments.</span>
              </h1>

              <p>
                Utility bills, international and local phone refills, trade your
                airtime, gift cards all in one app.
              </p>
            </motion.div>
            <motion.div
              className={styles.heroSocials}
              initial="offscreen"
              variants={FadeInUp}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div>
                {" "}
                <a href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}>
                  <Image
                    src={AppStore}
                    alt="App Store"
                    width={146}
                    height={146}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />{" "}
                </a>
              </div>
              <div>
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=com.bingpay.bing_pay"
                  }
                >
                  <Image
                    src={GooglePlay}
                    alt="Google Play"
                    width={160}
                    height={160}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />{" "}
                </a>
              </div>{" "}
            </motion.div>
          </div>

          <motion.div
            className={styles.heroImage}
            initial="offscreen"
            variants={FadeInRight}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src={BingHero}
              alt="Picture of the author"
              width={650}
              height={650}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />{" "}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
