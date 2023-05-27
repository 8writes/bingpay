"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import styles from "./index.module.css";

const FadeInUp = dynamic(() => import("./Framer/FadeInUp"), {
  ssr: false,
});

export default function Section() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionContext}>
          <p>
            Money laundering is the process of making money earned from criminal
            activity appear to have a legitimate source. It’s a multi-stage
            process where the money is accumulated, separated from its original
            source, mixed with legitimately-earned funds and then funneled back
            to its original source. Money Laundering empowers corruption and
            organized crime where corrupt public officials and criminals can
            launder proceeds from crimes, bribes, kickbacks, public funds and on
            some occasion, even development loans from international financial
            institutions. Organized criminal groups want to be able to launder
            the proceeds of drug trafficking and commodity smuggling through the
            financial systems without a trace. In the modern-day definition,
            Money Laundering now covers various predicate offences including
            child trafficking, prostitution, etc. TRILBERTECH LIMITED is
            committed to fighting money laundering and complying fully with
            anti-money laundering laws in Nigeria. We understand that we have
            responsibilities to help fight the global battle against money
            laundering and our commitment will supersede all other privacy
            obligations contained in our policies. Accordingly, Trilbertech
            Limited will take all reasonable and appropriate steps to prevent
            persons engaged in money laundering, fraud, or other financial
            crimes from utilizing our products and services. Our AML policies,
            procedures and internal controls are designed to ensure compliance
            with all applicable BSA regulations and FINRA rules and will be
            reviewed and updated on a regular basis to ensure appropriate
            policies, procedures and internal controls are in place to account
            for both changes in regulations and changes in our business. The AML
            Policy encompasses, but is not limited to the following activities:
          </p>
          <h1>Internal Control</h1>
          <p>
            Trilbertech has formulated and implemented internal controls and
            other procedures that will deter criminals from using its facilities
            for money laundering and terrorist financing and to ensure that its
            obligations under subsisting laws and regulations are met.
          </p>
          <h1>Know Your Customers</h1>
          <p>
            Establishing and maintaining a risk-based approach to Customer Due
            Diligence (CDD), including customer identification, verification and
            KYC procedures. To ensure we meet these standards, our customers are
            required to provide certain personal details when opening an account
            and also generate OTP and password for any withdrawal request. The
            nature, and extent, of what is required is guided by the customer’s
            deposit and withdrawal limits, account to be used and in some cases,
            the customer’s country of residence. In certain circumstances,
            TRILBERTECH may perform enhanced due diligence procedures for
            customers presenting a higher risk, such as those transacting large
            volumes etc. Maintaining appropriate KYC records for the minimum
            prescribed periods.
          </p>
          <h1>Awareness And Training</h1>
          <p>
            Trilbertech implements appropriate training and awareness for all
            its employees on AML/CFT. We provide awareness to our customers
            through newsletters, flash-news, online and in-person training
            sessions etc. These trainings and awareness take cognizance of
            emerging trends, regulations and standards on ML/FT risk.
          </p>
          <h1>Transaction Surveillance </h1>
          <p>
            Transaction monitoring is performed both manually and automatically.
            The former is carried out by all employees, who are routinely
            supplied with red flags to watch for, while the latter is handled by
            the Compliance Unit. All employees are informed that suspicious
            activities/transactions should be reported immediately to the
            Compliance Unit. Suspicious Transactions are brought to the
            Compliance Unit’s notice manually or automatically, with the former
            via internal suspicious transaction reports filed with the
            Compliance Unit and the latter via transaction monitoring tools
            examined by Compliance Officers. If considered necessary, a report
            is submitted to the appropriate regulatory body. To effectively
            monitor transactions coming through Bingpay Finance’s systems, the
            SAS Anti-Money Laundering tool has been fully implemented,
            representing a significant development in the way transactions are
            monitored and probed.
          </p>
        </div>
      </div>
    </div>
  );
}
