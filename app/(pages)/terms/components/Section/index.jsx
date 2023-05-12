"use client";

import dynamic from "next/dynamic";

import styles from "./index.module.css";
import Link from "next/link";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Section() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionContext}>
          <p>
            Copyright © 2021. Triber inc. This site is protected by copyright
            and trademark laws under Nigeria and international law. All rights
            reserved. Trilber may revise and update these Terms of Use at any
            time. Please periodically review these Terms of Use because of your
            continued usage of Bingpay services. Please be informed that we can
            terminate your relationship with us if we believe that you have
            violated any of these terms.
          </p>
          <h1>Bingpay Privacy Policy</h1>
          <p>
            Bingpay’s position on the privacy of its clients and visitors to
            this website can be found in the Bingpay's{" "}
            <Link href="privacy-policy"> <span className={styles.focus}>Privacy Policy</span> </Link>.
          </p>
          <h1>Use of contents - Copyright</h1>
          <p>
            Upon acceptance of these Terms and Conditions, Bingpay authorizes
            you, to view or download a single copy of, the material on this
            website solely for your personal, informational use, provided that
            you retain all copyright and other proprietary notices contained in
            the original material on any copies of the material. Such material
            specified above does not include the design or layout of bingpay’s
            websites. Elements of bingpay’s websites are protected by trade
            dress, trademark, unfair competition, and other laws and may not be
            copied or imitated in whole or in part. No logo, graphic, sound or
            image from bingpay’s websites may be copied or retransmitted unless
            expressly permitted by Bingpay. Special rules or license terms may
            apply to the use of certain software and other items provided to you
            via Bingpay’s websites (collectively, “Software”). Any such special
            rules or license terms accompany or are listed in association with
            or through a hyperlink associated with the Software. The contents of
            Bingpay’s websites (“Content”), such as text, graphics, data,
            images, Software and other material are protected by copyright and
            other laws in both Nigeria and other countries, and title to the
            Content shall not pass to you or any other party.
          </p>
          <h1>Account Registration</h1>
          <p>
            To be eligible to use the Bingpay Services, you must create an
            account with your email. As further detailed in our Privacy Policy,
            in order to register, create and use an account, Company may require
            that you submit certain Personal Information (as defined in the
            Privacy Policy). You agree that the Personal Information you provide
            to Company upon registration and at all other times will be true,
            accurate, current and complete, and you agree to maintain and update
            this Personal Information with us as necessary.
          </p>
          <h1>Transaction History</h1>
          <p>
            You have the right to receive an account history. You may view your
            account activity or history by logging into your Bingpay Account.
          </p>
          <h1>Links and Third parties</h1>
          <p>
            Bingpay’s website contain links to third party websites. These links
            are provided solely as a convenience to you and not as an
            endorsement by Bingpay of the content on such third-party websites.
            Bingpay is not responsible for the content of linked third-party
            websites and does not make any representations regarding the content
            or accuracy of materials on such third-party websites. If you decide
            to access linked third-party websites, you do so at your own risk.
            Your use of third-party websites is subject to any applicable terms
            and conditions of use for such sites. Linking to any page of any of
            Bingpay’s websites other than https://www.bingpay.ng through a plain
            text link is strictly prohibited in the absence of a separate
            linking Agreement with Bingpay. Any website or other device that
            links to https://www.bingpay.ng is prohibited from:
          </p>
          <ol type="a">
            <li>replicating Content</li>
            <li>using a browser or border environment around the Content</li>
            <li>
              implying in any fashion that Bingpay is endorsing it or its
              products
            </li>
            <li>
              misrepresenting any state of facts, including its relationship
              with Bingpay
            </li>
            <li>
              presenting false information about Bingpay products or services,
              and
            </li>
            <li>
              using any Bingpay logo or mark without permission from Bingpay.
            </li>
          </ol>
          <h1>Closing your account</h1>
          <p>
            As long as there are no pending or in progress transactions, you may
            close your account at any time. You may close your account by
            emailing us at hello@bingpay.ng and requesting that we close your
            account. It may take up to 30 days for your account closure to be
            complete. You may not close your account to evade a payment
            investigation. If you attempt to close your account while we are
            conducting an investigation, we may hold your funds for up to 100
            days to protect the Company or a third party against the risk of
            reversals, chargebacks, claims, fees, fines, penalties and other
            liability. You will remain liable for all obligations related to
            your account even after the account is closed.
          </p>
          <h1>Compliance with the law</h1>
          <p>
            These Terms of Use shall be interpreted and governed by the laws
            currently in force in the Federal Republic of Nigeria.
          </p>
          <h1>General</h1>
          <p>
            Bingpay is based in Fedral Republic Of Nigeria. Bingpay makes no
            claims the Content is appropriate or may be downloaded outside of
            Nigeria. Access to the Content (including Software) may not be legal
            by certain persons or in certain countries. If you access Bingpay’s
            websites from outside the Nigeria, you do so at your own risk and
            are solely responsible for compliance with the laws of your
            jurisdiction and any other applicable laws.
          </p>
          <h1>Payment Investigations</h1>
          <p>
            Payment investigation is a process by which the Company reviews
            certain potentially high-risk transactions. If a payment is subject
            to payment investigation, Bingpay will place a hold on the payment
            or account and may provide notice to the recipient. We will will
            conduct a review and either clear or cancel the payment. If the
            payment is cleared, Company will provide notice to the recipient.
            Otherwise, Company will cancel the payment and the funds will be
            returned. Company will provide notice to you by email and/or in the
            account history tab of your Bingpay account if the payment is
            canceled.
          </p>
          <h1>Changes to our terms of service</h1>
          <p>
            Any changes we may make to our privacy policy in the future will be
            posted on this page.
          </p>
        </div>
      </div>
    </div>
  );
}
