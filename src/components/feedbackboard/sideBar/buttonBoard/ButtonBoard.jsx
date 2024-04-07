import React from "react";
import styles from "./ButtonBoard.module.css";

import { useContext } from "react";
import { FeedbackContext } from "../../../../store/feedback-context";

export default function ButtonBoard() {
  const capitalizeFirstLetter = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const { filteredProductsByCategory } = useContext(FeedbackContext);

  function handleCategory(category){
    const allProduct = filteredProductsByCategory(category)
    console.log(allProduct);
  }

  const categories = ["All", "UI", "UX", "enhancement", "bug", "feature"];

  return (
    <div className={`${styles.buttonBoard} `}>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button className={styles.button} onClick={()=>handleCategory(category)}>{capitalizeFirstLetter(category)}</button>
          </div>
        );
      })}
    </div>
  );
}
