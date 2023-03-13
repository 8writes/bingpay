import Image from "next/image";
import logoDark from "/public/logo-dark.webp";
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
            src={logoDark}
            alt="Picture of the author"
            width={120}
            height={120}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className={styles.navLinks}>
          <span className={styles.Links}>
            {" "}
            <Link href="/">Business</Link>
          </span>
          <span className={styles.Links}>
            {" "}
            <Link href="/">About</Link>
          </span>
          <span className={styles.Links}>
            {" "}
            <Link href="/">Support</Link>
          </span>
        </div>
      </section>
    </div>
  );
}
