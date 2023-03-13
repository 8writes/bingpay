import Image from "next/image";
import Link from "next/link";
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
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${quicksand.variable}`}>
      <section className={styles.mobileNav}>
        <div>
          <Image
            src="/logo-dark.webp"
            width={100}
            height={100}
            alt="Bingpay Logo"
            loading="lazy"
          />
        </div>
        <div onClick={() => setShowMenu(!showMenu)}>
          <svg width="30" height="30" viewBox="0 0 20 20">
            <path
              fill="#B71D95"
              d="M3 18h18v-2H3v2zm0-5h15v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
