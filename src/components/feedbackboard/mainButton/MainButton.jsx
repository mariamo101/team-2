import React from "react";
import styles from "./MainButton.module.css";
import {Link} from "react-router-dom";

export default function MainButton({text}) {
  return (
    <>
      <Link to="/new-feedback">
        <button className={styles.purpleBtn}>{text}</button>
      </Link>
    </>
  );
}
