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
        <div style={{ padding: "6px" }}>
          <Image
            src="/logo-dark.webp"
            width={90}
            height={90}
            alt="Bingpay Logo"
            loading="lazy"
          />
        </div>
        <div onClick={() => setShowMenu(!showMenu)}>
          <Image
            src="/mobile-menu-opn.svg"
            width={35}
            height={35}
            alt="Bingpay Logo"
            loading="lazy"
          />
        </div>
      </section>
      <div className={`menu ${showMenu ? "show" : ""}`}>
        <div className="menu-body">
          <div className="menu-nav">
            <div style={{ padding: "6px" }}>
              <Image
                src="/logo-dark.webp"
                width={90}
                height={90}
                alt="Bingpay Logo"
                loading="lazy"
              />
            </div>

            <div
              style={{ padding: "6px" }}
              onClick={() => setShowMenu(!showMenu)}
            >
              <Image
                src="/mobile-menu-cls.svg"
                width={20}
                height={20}
                alt="Bingpay Logo"
                loading="lazy"
              />
            </div>
          </div>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .menu {
          display: none;
        }

        .menu.show {
          position: fixed;
          display: block;
          background-color: white;
          width: 100vw;
          height: 100vh;
          justify-content: space-between;
          padding: 15px 30px 15px 10px;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
        .menu-nav {
          display: flex;
          justify-content: space-between;
        }
        .menu-body {
          display: grid;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          padding: 10px;
          background-color: #eee;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
}
