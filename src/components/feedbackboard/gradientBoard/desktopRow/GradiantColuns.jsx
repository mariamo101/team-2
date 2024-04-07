import React from "react";
import hamburger from "/assets/shared/mobile/icon-hamburger.svg";
import close from "/assets/shared/mobile/icon-close.svg";
import { useState } from "react";
import SideBar from "../../sideBar/SideBar";
import ButtonBoard from "../../sideBar/buttonBoard/ButtonBoard";
import RoadBoard from "../../sideBar/roadBoard/RoadBoard";
import styles from "./GradiantColuns.module.css";

export default function () {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prew) => setMenu(!prew));
  };
  return (
    <div className={`${styles.tabletBar} flex-col`}>
      <div className={styles.gradientBoard}>
        <div>
          <h1 className={styles.title1}>Frontend Mentor</h1>
          <h2 className={styles.title2}>Feedback Board</h2>
        </div>
        <img
          style={{ cursor: "pointer" }}
          src={menu ? close : hamburger}
          alt={menu ? "Menu Close" : "Menu"}
          onClick={toggleMenu}
          className={styles.menuIcon}
        />
        {menu && <SideBar menu={menu} toggleMenu={toggleMenu} />}
      </div>

      <div className={styles.board}>
        <ButtonBoard />
        <RoadBoard />
      </div>
    </div>
  );
}
