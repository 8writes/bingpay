import Image from "next/image";
import Link from "next/link";
import styles from "./mobileNav.module.css";
import { useEffect } from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export default function mobileNav() {
  useEffect(() => {
    const mobileNav = document.querySelector(`.${styles.mobileNav}`);
    // Add or remove the "mobileScrollNav" class based on the scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        mobileNav.classList.add(styles.mobileScrollNav);
      } else {
        mobileNav.classList.remove(styles.mobileScrollNav);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${quicksand.variable}`}>
      <section className={styles.mobileNav}>
        <div>
          <Image
            src="/logo-dark.webp"
            width={120}
            height={120}
            alt="Bingpay Logo"
            loading="lazy"
          />
        </div>
        <div className={styles.mobileNavLinks}></div>
      </section>
    </div>
  );
}
