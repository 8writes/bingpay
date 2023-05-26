"use client";

import dynamic from "next/dynamic";

import styles from "./index.module.css";

import React, { useState } from "react";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

import "./index.css";

export default function Section() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionContext}>
          <div className={styles.tab}>
            {["Frequently Asked Questions", "How To ?"].map((title, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                style={{
                  backgroundColor:
                    index === activeTab
                      ? "rgb(244, 244, 244)"
                      : "white",
                }}
              >
                {title}
              </button>
            ))}
          </div>
          <div>
            {activeTab === 0 && (
              <div>
                {" "}
                <div class={styles.container}>
                  <FadeInUp>
                    <details>
                      <summary>Why did my BVN verification Fail ?</summary>
                      <p>
                        To purchase all bingpay services ranging from Data to
                        Airtime & Bills. You just have to fund your account.
                        Navigate to Deposit Input the amount you wish to deposit
                        and click on the "Deposit" button.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>Can I withdraw deposited funds ?</summary>
                      <p>
                        Bingpay do not give database access to third parties.
                        This means that all your account details, Credit cards
                        and purchase history is safe with us. Your money will be
                        kept on your account as long as the account is still
                        with us, and you wont be debited for no reason.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>What is MTN (SME) DATA ?</summary>
                      <p>
                        MTN SME Data Share is a prepaid service that allows
                        business firms like us to buy data bundles and share
                        with you. Its Validity is 90 days and its assumed to be
                        Cheaper & Faster than Direct Data but a bit more
                        consuming.
                      </p>
                    </details>
                  </FadeInUp>
                </div>
                <FadeInUp>
                  <details>
                    <summary>
                      What is Visa Virtual Card?
                    </summary>
                    <p>
                      MTN SME Data Share is a prepaid service that allows
                      business firms like us to buy data bundles and share with
                      you. Its Validity is 90 days and its assumed to be Cheaper
                      & Faster than Direct Data but a bit more consuming.
                    </p>
                  </details>
                </FadeInUp>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                {" "}
                <div class={styles.container}>
                  <FadeInUp>
                    <details>
                      <summary>How do I Create a Bingpay Account ?</summary>
                      <p>
                        To purchase all bingpay services ranging from Data to
                        Airtime & Bills. You just have to fund your account.
                        Navigate to Deposit Input the amount you wish to deposit
                        and click on the "Deposit" button.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How do I update my Personal Info?</summary>
                      <p>
                        Bingpay do not give database access to third parties.
                        This means that all your account details, Credit cards
                        and purchase history is safe with us. Your money will be
                        kept on your account as long as the account is still
                        with us, and you wont be debited for no reason.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>
                        How do I purchase Gift Cards ?
                      </summary>
                      <p>
                        MTN SME Data Share is a prepaid service that allows
                        business firms like us to buy data bundles and share
                        with you. Its Validity is 90 days and its assumed to be
                        Cheaper & Faster than Direct Data but a bit more
                        consuming.
                      </p>
                    </details>
                  </FadeInUp>
                </div>
              </div>
            )}
            {activeTab === 2 && <div>Content for Tab 3</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
