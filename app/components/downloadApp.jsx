import Image from "next/image";
import GooglePlay from "/public/images/google-play.svg";
import AppStore from "/public/images/app-store.svg";
import styles from "./downloadApp.module.css";
import Merchant from "/public/images/merchant.svg";
import { motion } from "framer-motion";

export default function DownloadApp() {
  const FadeInUp = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.9,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <motion.div
      className={styles.downloadApp}
      initial="offscreen"
      variants={FadeInUp}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      {" "}
      <div className={styles.downloadAppContext}>
        <span>
          <h1>Download the Bingpay Mobile App.</h1>
        </span>
        <span>
          <p>
            Create a personal or business account today and enjoy endless
            payment opportunities.
          </p>
        </span>
        <span className={styles.heroSocials}>
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
        </span>
      </div>
      <div className={styles.downloadImg}>
        <Image
          src={Merchant}
          alt="App Store"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />{" "}
      </div>
    </motion.div>
  );
}
