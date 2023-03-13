
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
            alt="Open"
            loading="lazy"
          />
        </div>
      </section>
      <div className={`menu ${showMenu ? "show" : ""}`}>
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
              alt="Close"
              loading="lazy"
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
                    src="/app-store.svg"
                    width={135}
                    height={135}
                    alt="App Store Image"
                    loading="lazy"
                  />
                </a>
              </div>
              <div>
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=com.bingpay.bing_pay"
                  }
                >
                  <Image
                    src="/google-play.svg"
                    width={150}
                    height={150}
                    alt="Google-play Store Image"
                    loading="lazy"
                  />
                </a>
              </div>{" "}
            </div>
          </div>
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
          padding: 18px 30px 18px 10px;
        }
        .menu-nav {
          display: flex;
          justify-content: space-between;
          padding: 0 0 16px 0;
        }
        .menu-body {
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          display: grid;
          padding: 30px 0 30px 0;
          gap: 50px;
          border-top: 2px solid #f4eded9c;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          padding: 10px;
          white-space: nowrap;
          color: #761b60;
          margin-bottom: 5px;
          font-size: large;
          font-weight: 800;
          font-family: var(--font-quicksand);
        }

        @media (min-width: 1024px) {
          .menu.show {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
