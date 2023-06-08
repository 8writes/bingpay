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
                      <summary>BVN verification failed ?</summary>
                      <p>
                        This is because the names on your bingpay account
                        doesn't match the data on your BVN. Kindly contact our
                        Support team via the BingPay App for further assistance.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>I forgot My Password </summary>
                      <p>
                       Navigate to the Sign In page, select Reset Password and follow the steps.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>Where is my username ?</summary>
                      <p>
                        Your Username is located in your Account, Personal
                        Information.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>
                        How long does a withdrawal takes to reflect ?
                      </summary>
                      <p>
                        Withdrawals will reflect within 30 minutes. Otherwise,
                        kindly contact our Support team via the BingPay App or
                        any of our social handles for further assistance.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>
                        How long does airtime to cash transactions take to
                        reflect ?
                      </summary>
                      <p>
                        Airtime to cash transactions are processed within 1 to 2
                        working hour. Otherwise, kindly contact our Support team
                        via the BingPay App or any of our social handles for
                        further assistance.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>
                        I was debited but wasn't credited on BingPay.
                      </summary>
                      <p>
                        Your account will be credited as soon as we verify the
                        payment. Otherwise, kindly contact our Support team via
                        the BingPay App or any of our social handles for further
                        assistance.
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
                      <summary>How to create an account ?</summary>
                      <p>
                        Download the bingPay Mobile app, select Sign Up Account,
                        fill in your information and Sign Up Account.{" "}
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How to fund my account ?</summary>
                      <p>
                        Navigate to Fund Wallet, choose from the option,
                        Transfer or Fund with debit card , Input the amount you
                        wish to deposit and follow the steps.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How to update my personal details ?</summary>
                      <p>
                        Kindly contact our Support team via the BingPay App to
                        update your personal details.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How to change my password ?</summary>
                      <p>
                        Navigate to Account, change password, Input old password
                        and new password.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How to change my transaction pin ?</summary>
                      <p>
                        Navigate to Account, change Transaction Pin, Input
                        password and new pin.
                      </p>
                    </details>
                  </FadeInUp>
                  <FadeInUp>
                    <details>
                      <summary>How to access my sim services ?</summary>
                      <p>
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
