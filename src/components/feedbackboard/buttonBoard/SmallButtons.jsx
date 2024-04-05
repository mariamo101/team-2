import React from "react";
import styles from "./SmallButtons.module.css";
export default function SmallButtons({ text }) {
  return (
    <>
      <button className={styles.button}>{text}</button>
    </>
  );
}
