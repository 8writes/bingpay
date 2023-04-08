import Image from "next/image";
import Merchant from "/public/merchant.svg";
import styles from "./business.module.css";

export default function Business() {
  return (
    <div>
      <section className={styles.business}>
        <span className={styles.introMobile}>
          <h1>Bingpay for Business 💸</h1>
        </span>
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
        <div className={styles.businessContext}>
          <span className={styles.intro}>
            <h1>Bingpay for Business 💸</h1>
          </span>
          <span className={styles.heading}>
            <h1> Accept payments instantly with Bingpay!</h1>
          </span>
          <p>
            With Bingpay business, you can accept payment with your merchant ID,
            make bulk transactions with discounts, get access to our developer
            APIs and reach more audience with SMS marketing.
          </p>
          <span className={styles.btn}>
            <button>Join Waitlist</button>
          </span>
        </div>
      </section>
    </div>
  );
}
