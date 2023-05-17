"use client";

import dynamic from "next/dynamic";

import styles from "./index.module.css";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

import "./index.css";

export default function Section() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionContext}>
          <div class={styles.container}>
            <FadeInUp>
              <details>
                <summary>How do I get started ?</summary>
                <p>
                  To purchase all bingpay services ranging from Data to Airtime
                  & Bills. You just have to fund your account. Navigate to
                  Deposit Input the amount you wish to deposit and click on the
                  "Deposit" button.
                </p>
              </details>
            </FadeInUp>
            <FadeInUp>
              <details>
                <summary>
                  How safe is my Money and Personal information ?
                </summary>
                <p>
                  Bingpay do not give database access to third parties. This
                  means that all your account details, Credit cards and purchase
                  history is safe with us. Your money will be kept on your
                  account as long as the account is still with us, and you wont
                  be debited for no reason.
                </p>
              </details>
            </FadeInUp>
            <FadeInUp>
              <details>
                <summary>What is MTN (SME) DATA ?</summary>
                <p>
                  MTN SME Data Share is a prepaid service that allows business
                  firms like us to buy data bundles and share with you. Its
                  Validity is 90 days and its assumed to be Cheaper & Faster
                  than Direct Data but a bit more consuming.
                </p>
              </details>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}
