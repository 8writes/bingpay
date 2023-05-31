import styles from "./index.module.css";

export default function Banner() {
  return (
    <>
      <section className={styles.banner}>
        <hgroup className={styles.bannerContext}>
          <h1>Terms & Conditions </h1>
          <p>Last Updated: 25 July, 2021. </p>
        </hgroup>
      </section>
    </>
  );
}
