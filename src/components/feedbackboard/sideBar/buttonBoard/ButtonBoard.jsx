import React, { useEffect } from "react";
import styles from "./ButtonBoard.module.css";

import { useContext } from "react";
import { FeedbackContext } from "../../../../store/feedback-context";

export default function ButtonBoard() {
  const capitalizeFirstLetter = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const { filteredProductsByCategory, categories } =
    useContext(FeedbackContext);


  function handleCategory(category) {
    filteredProductsByCategory(category);
    localStorage.setItem("category", category);
  }

  return (
    <div className={`${styles.buttonBoard} `}>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button
              className={`${styles.button} ${
                localStorage.getItem("category") === category
                  ? "!text-numsA !bg-smBtnBgA"
                  : ""
              }`}
              onClick={() => handleCategory(category)}
            >
              {capitalizeFirstLetter(category)}
            </button>
          </div>
        );
      })}
    </div>
  );
}
