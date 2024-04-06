import React from "react";
import ButtonBoard from "./buttonBoard/ButtonBoard";
import styles from "./SideBar.module.css";
import RoadBoard from "./roadBoard/RoadBoard";

export default function () {
  return (
    <div className={styles.sidebar}>
      <ButtonBoard />
      <RoadBoard />
    </div>
  );
}
