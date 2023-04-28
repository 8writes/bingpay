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

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export default function mobileNav() {
  useEffect(() => {
    const navBar = document.querySelector(`.${styles.MobileNav}`);
    // Add or remove the "scrollMobileNav" class based on the scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navBar.classList.add(styles.ScrollMobileNav);
      } else {
        navBar.classList.remove(styles.ScrollMobileNav);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <section className={styles.MobileNav}>
        <div>
          <Image
            src={logoDark}
            alt="Bingpay Logo"
            width={120}
            height={120}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div onClick={toggleVisibility}>
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
      <section id="ToggleNav" style={{ display: isVisible ? "block" : "none" }}>
        <div className={styles.NavContents}>
          <div className={styles.MobileNavInner}>
            <div>
              <Image
                src={logoDark}
                alt="Bingpay Logo"
                width={120}
                height={120}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <div onClick={toggleVisibility} style={{ padding: "6px" }}>
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
          <div className={styles.NavMenu}>
            <div className={styles.NavLinks}>
              <div className={styles.NavList}>
                <h1>Business</h1>
                <ul>
                  <li>Join Waitlist</li>
                </ul>
              </div>{" "}
              <div className={styles.NavList}>
                {" "}
                <h1>Company</h1>
                <ul>
                  <li>Blog</li>
                  <li>About Us</li>
                  <li>Join Our Team</li>
                  <li>Developers</li>
                </ul>
              </div>
              <div className={styles.NavList}>
                <h1>Support</h1>
                <ul>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>AML/KYC Policy</li>
                </ul>
              </div>
              <div className={styles.HeroSocials}>
                <div>
                  {" "}
                  <a
                    href={"https://apps.apple.com/uy/app/bingpay/id1589089598"}
                  >
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
      </section>
    </div>
  );
}
