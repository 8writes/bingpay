import React from "react";
import styles from "./index.module.css";

const Button = ({ children }) => {
  return (
    <>
      <div className={styles.button}>
        <button>{children}</button>
      </div>
    </>
  );
};

export default Button;
