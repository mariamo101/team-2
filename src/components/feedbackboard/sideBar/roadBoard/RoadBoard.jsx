import React from "react";
import styles from "./RoadBoard.module.css";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div className={styles.roadBoard}>
      <h1 className={styles.roadTitle}>
        Roadmap
        <Link className={styles.view}>view</Link>
      </h1>
      <div className={styles.roadMap}>
        <div className={styles.roadSpans}>
          <div className="w-2 h-2 rounded-full bg-[#f49f85]" />
          <div className={styles.statusContainer}>
            <p className={styles.planned}>Planned</p>
            <span className={styles.roadNums}>2</span>
          </div>
        </div>
        <div className={styles.roadSpans}>
          <div className="w-2 h-2 rounded-full bg-[#ad1fea]" />
          <div className={styles.statusContainer}>
            <p className={styles.InProgress}>In-Progress</p>
            <span className={styles.roadNums}>2</span>
          </div>
        </div>
        <div className={styles.roadSpans}>
          <div className="w-2 h-2 rounded-full bg-[#63bcfa]"></div>
          <div className={styles.statusContainer}>
            <p className={styles.Live}>Live</p>
            <span className={styles.roadNums}>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
