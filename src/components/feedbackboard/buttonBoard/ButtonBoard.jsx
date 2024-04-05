import React from "react";
import styles from "./ButtonBoard.module.css";
import SmallButtons from "./SmallButtons";

export default function ButtonBoard() {
  return (
    <div className={styles.buttonBoard}>
      <SmallButtons />
    </div>
  );
}
