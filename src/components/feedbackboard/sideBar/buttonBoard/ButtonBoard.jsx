import React from "react";
import styles from "./ButtonBoard.module.css";
import SmallButtons from "./SmallButtons";

export default function ButtonBoard() {
  return (
    <div className={styles.buttonBoard}>
      <SmallButtons text="All" />
      <SmallButtons text="UI" />
      <SmallButtons text="UX" />
      <SmallButtons text="Enhancement" />
      <SmallButtons text="Bug" />
      <SmallButtons text="Feature" />
    </div>
  );
}
