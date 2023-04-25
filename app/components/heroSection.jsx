import styles from "./heroSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";
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
  
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [hasLoaded, setHasLoaded] = useState(false);
  const isAnimating = !hasLoaded;

  useEffect(() => {
    if (inView) {
      setHasLoaded(true);
    }
  }, [isAnimating]);

  const FadeInUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const FadeInRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
            <div>
              <h1>
                Your one stop app for <br></br> everyday{" "}
                <span className="">payments.</span>
              </h1>

              <p>
                Utility bills, international and local phone refills, trade your
                airtime, gift cards all in one app.
              </p>
            </div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isAnimating ? "visible" : "hidden"}
              variants={FadeInUp}
            >
              <div className={styles.heroSocials}>
                <div>
                  {" "}
                  <a
                    href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}
                  >
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
              </div>
            </motion.div>
          </div>

          <div className={styles.heroImage}>
            {" "}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isAnimating ? "visible" : "hidden"}
              variants={FadeInRight}
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
        </div>
      </section>
    </div>
  );
}
