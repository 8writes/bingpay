"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import styles from "./index.module.css";

const FadeInLeft = dynamic(() => import("../../components/Framer/FadeInLeft"), {
  ssr: false,
});

const FadeInRight = dynamic(
  () => import("../../components/Framer/FadeInRight"),
  {
    ssr: false,
  }
);

const FadeInUp = dynamic(() => import("../../components/Framer/FadeInUp"), {
  ssr: false,
});

import "../../style.css";

export default function Section() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContext}>
          <div className={styles.tab}>
            {["F.A.Qs", "How To ?"].map((title, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                style={{
                  backgroundColor: index === activeTab ? "#F4F2FB" : "white",
                }}
              >
                {title}
              </button>
            ))}
          </div>
          <div>
            {activeTab === 0 && (
              <div>
                <div class={styles.container}>
                  <FadeInUp>
                    <details>
                      <summary>Why did my BVN verification Fail ?</summary>
                      <p>
                        This is because the names on your bingpay account
                        doesn't match the data on your BVN, if you feel it's
                        correct, please contact our support for assistance.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>What is Bingtag?</summary>
                      <p>
                        Bingtag is a unique username-like code given to you
                        after registration. You can use this tag to request or
                        send out cash on bingpay.
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
                  <FadeInUp>
                    <details>
                      <summary>
                        How long does transaction takes to reflect?
                      </summary>
                      <p>
                        Our Airtime, Data, Bills and Peer to peer money transfer
                        system are automated and instant. If you do not recieve
                        your payment instantly, this could be your network
                        problem else contact support for assistance.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>
                        I was debited but wasn't credited on bingpay
                      </summary>
                      <p>
                        Kindly Contact our Support team via Live chat or any of
                        our social handles for futher assistance. Your account
                        will be credited as soon as we verify the payment.
                      </p>
                    </details>
                  </FadeInUp>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <div class={styles.container}>
                  <FadeInUp>
                    <details>
                      <summary>How to Create an Account ?</summary>
                      <p>Download the bingPay Mobile app, select create an account, fill in out your information and proceed. </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How do I deposit?</summary>
                      <p>
                        To purchase all bingpay services ranging from Data to
                        Airtime & Bills. You just have to fund your account.
                        Navigate to Deposit, choose from the option card or
                        transfer, Input the amount you wish to deposit and
                        follow the steps.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How to Change my password ?</summary>
                      <p>
                        Navigate to Account, change password, Input old password
                        and new password.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How to Change my Transaction Pin ?</summary>
                      <p>
                        Navigate to Account, change Transaction Pin, Input
                        password and new pin.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How to access my Sim Services ?</summary>
                      <p>
                        Use the updated codes that has been approved by the NCC
                        under the new harmonized short-codes regime. <br></br>
                        Check Airtime balance — 310
                        <br></br> Data plan — 312 <br></br> Share services — 321{" "}
                        <br></br>
                        Data plan balance — 323
                      </p>
                    </details>
                  </FadeInUp>
                </div>
              </div>
            )}
            {activeTab === 2 && <div>Content for Tab 3</div>}
          </div>
        </div>
      </section>
    </>
  );
}
