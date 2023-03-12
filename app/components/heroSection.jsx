import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./heroSection.module.css";
import { Space_Grotesk, Quicksand } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
  display: "swap",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
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
    <div className={`${space_grotesk.variable} ${quicksand.variable}`}>
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <div>
              <h1>
                <span>
                  Your one stop app for <br></br> everyday{" "}
                  <span className="text-pink-600">payments.</span>
                </span>
              </h1>

              <p>
                <span>
                  Pay bills, purchase International and local phone refills,
                  gift cards all in one app.
                </span>
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
                      src="/app-store.svg"
                      width={135}
                      height={135}
                      alt="App Store Image"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={
                      "https://play.google.com/store/apps/details?id=com.bingpay.bing_pay"
                    }
                  >
                    <Image
                      src="/google-play.svg"
                      width={150}
                      height={150}
                      alt="Google-play Store Image"
                      loading="lazy"
                    />
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
                src="/bing-hero.png"
                width={650}
                height={650}
                alt="Bingpay Logo"
                loading="lazy"
              />{" "}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
