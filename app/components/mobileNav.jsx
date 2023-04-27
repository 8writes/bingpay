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
    const navBar = document.querySelector(`.${styles.mobileNav}`);
    // Add or remove the "scrollMobileNav" class based on the scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navBar.classList.add(styles.scrollMobileNav);
      } else {
        navBar.classList.remove(styles.scrollMobileNav);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <section className={styles.mobileNav}>
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
        <div>
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
    </div>
  );
}
