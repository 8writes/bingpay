import Image from "next/image";
import GooglePlay from "/public/google-play.svg";
import AppStore from "/public/app-store.svg";
import styles from "./downloadApp.module.css";
import Merchant from "/public/merchant.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DownloadApp() {
  const { ref, inView } = useInView({ threshold: 0 });

  const FadeIn= {
    visible: { opacity: 1},
    hidden: { opacity: 0},
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={FadeIn}
      transition={{ duration: 0.7 }}
    >
      <div className={styles.downloadApp}>
        {" "}
        <div className={styles.downloadAppContext}>
          <span>
            <h1>Download the Bingpay App</h1>
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
        <div>
          <Image
            src={Merchant}
            alt="App Store"
            width={500}
            height={500}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />{" "}
        </div>
      </div>
    </motion.div>
  );
}
