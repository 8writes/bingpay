import styles from "./index.module.css";

export default function Banner() {
  return (
    <>
      <section className={styles.banner}>
        <hgroup className={styles.bannerContext}>
          <h1>Help Center</h1>
        </hgroup>
      </section>
    </>
  );
}
