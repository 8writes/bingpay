import Image from "next/image";
import Link from "next/link";
import logoDark from "/public/logo-dark.webp";
import GooglePlay from "/public/google-play.svg";
import AppStore from "/public/app-store.svg";
import OpenNav from "/public/mobile-menu-opn.svg";
import CloseNav from "/public/mobile-menu-cls.svg";
import styles from "./mobileNav.module.css";
import { useState, useEffect } from "react";
import { Quicksand } from "next/font/google";
import "./mobileNavMenu.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export default function mobileNav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`${quicksand.variable}`}>
      <section className={styles.mobileNav}>
        <div style={{ padding: "6px" }}>
          <Image
            src={logoDark}
            alt="Bingpay Logo"
            width={120}
            height={120}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div onClick={() => setShowMenu(!showMenu)}>
          <Image
            src={OpenNav}
            alt="Open Nav"
            width={35}
            height={35}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </section>
      <div className={`menu ${showMenu ? "show" : ""}`}>
        <div className="menu-nav">
          <div style={{ padding: "6px" }}>
            <Image
              src={logoDark}
              alt="Bingpay Logo"
              width={120}
              height={120}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>

          <div
            className="enable-scroll"
            style={{ padding: "6px" }}
            onClick={() => setShowMenu(!showMenu)}
          >
            <Image
              src={CloseNav}
              alt="Close Nav"
              width={20}
              height={20}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
        <div className="menu-body">
          <div className="menu-links">
            <ul>
              <li>Business</li>
              <li>About</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <div className={styles.heroSocials}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
