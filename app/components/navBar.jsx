import Image from "next/image";
import Link from "next/link";
import styles from "./navBar.module.css";
import { useEffect } from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export default function NavBar() {
  useEffect(() => {
    const navBar = document.querySelector(`.${styles.navBar}`);
    // Add or remove the "scrollNav" class based on the scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navBar.classList.add(styles.scrollNav);
      } else {
        navBar.classList.remove(styles.scrollNav);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${quicksand.variable}`}>
      <section className={styles.navBar}>
        <div>
          <Image
            src="/logo-dark.webp"
            width={130}
            height={130}
            alt="Bingpay Logo"
          />
        </div>
        <div className={styles.navLinks}>
          <span>
            {" "}
            <Link href="/">Business</Link>
          </span>
          <span>
            {" "}
            <Link href="/">About</Link>
          </span>
          <span>
            {" "}
            <Link href="/">Support</Link>
          </span>
        </div>
      </section>
    </div>
  );
}
