import Image from "next/image";
import styles from "./index.module.css";
import GooglePlay from "/public/images/google-play.svg";
import AppStore from "/public/images/app-store.svg";
import Download from "/public/images/download.png";
import FadeInUp from "./Framer/FadeInUp";

export default function DownloadApp() {
  return (
    <FadeInUp>
      <div className={styles.downloadApp}>
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
            src={Download}
            alt="Download image"
            width={500}
            height={500}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />{" "}
        </div>
      </div>
    </FadeInUp>
  );
}
