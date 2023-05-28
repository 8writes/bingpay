import styles from "./index.module.css";

export default function Banner() {
  return (
    <>
      <section className={styles.banner}>
        <hgroup className={styles.bannerContext}>
          <h1>Anti-Money Laundering Policy </h1>
          <p>Last Updated: 24th June, 2022. </p>
        </hgroup>
      </section>
    </>
  );
}
