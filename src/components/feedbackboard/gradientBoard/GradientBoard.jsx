import React from "react";
import styles from "./GradientBoard.module.css";
import hamburger from "/assets/shared/mobile/icon-hamburger.svg";
import close from "/assets/shared/mobile/icon-close.svg";
import { useState } from "react";

export default function GradientBoard() {
  const [manu, setManu] = useState(false);
  const toggleMenu = () => {
    setManu(!manu);
  };
  return (
    <div className={styles.gradientBoard}>
      <div>
        <h1>Frontend Mentor</h1>
        <h2>Feedback Board</h2>
      </div>
      <img
        style={{ cursor: "pointer" }}
        src={manu ? close : hamburger}
        alt={manu ? "Manu Close" : "Manu"}
        onClick={toggleMenu}
        className={styles.menuIcon}
      />
    </div>
  );
}
