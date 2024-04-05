import React from "react";
import styles from "./MainButton.module.css";
import { Link } from "react-router-dom";

export default function MainButton() {
  return (
    <>
      <Link to="/new-feedback">
        <button className={styles.feedbackBtn}>+ Add Feedback</button>
      </Link>
    </>
  );
}
