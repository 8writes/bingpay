import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({ threshold: 0.5 });

  const FadeInRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  const FadeInUp = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
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
                  Pay bills, purchase International and local phone refills, gift cards
                   all in one app.
                </span>
              </p>
            </div>
            <div className={styles.heroSocials}>
              <div>
                {" "}
                <a href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}>
                  <Image
                    src="/app-store.svg"
                    width={135}
                    height={135}
                    alt="App Store Image"
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
                    alt="App Store Image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/bing-hero.png"
              width={650}
              height={650}
              alt="Bingpay Logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
