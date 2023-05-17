"use client";

import dynamic from "next/dynamic";

import Link from "next/link";
import Image from "next/image";
import styles from "./brands.module.css";

import twitter from "/public/images/twitter.svg";

  
export default function Brands() {
 
  return (
    <div>
      <section className={styles.brands}>
        <ul>
          <li>
            {" "}
            <Link href="https://twitter.com/bingpayng" target="_blank">
              <Image
                src={twitter}
                alt="list"
                width={30}
                height={0}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
          </li>
          <li>
            {" "}
            <Link href="https://twitter.com/bingpayng" target="_blank">
              <Image
                src={twitter}
                alt="list"
                width={30}
                height={0}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
          </li>
          <li>
            {" "}
            <Link href="https://twitter.com/bingpayng" target="_blank">
              <Image
                src={twitter}
                alt="list"
                width={30}
                height={0}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
          </li>
          <li>
            {" "}
            <Link href="https://twitter.com/bingpayng" target="_blank">
              <Image
                src={twitter}
                alt="list"
                width={30}
                height={0}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
          </li>
          <li>
            {" "}
            <Link href="https://twitter.com/bingpayng" target="_blank">
              <Image
                src={twitter}
                alt="list"
                width={30}
                height={0}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
          </li>
          <li>
            {" "}
            <Link href="https://twitter.com/bingpayng" target="_blank">
              <Image
                src={twitter}
                alt="list"
                width={30}
                height={0}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
            </li>
        </ul>
      </section>
    </div>
  );
}
