import styles from "./index.module.css";

export default function Banner() {
  return (
    <>
      <section className={styles.banner}>
        <hgroup className={styles.bannerContext}>
          <h1>A new payment experience is here! </h1>
          <p>
            We're on an adventure to provide endless payment possibilities for
            everyone.
          </p>
        </hgroup>
      </section>
    </>
  );
}
