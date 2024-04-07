import React from "react";
import styles from "./ButtonBoard.module.css";
import SmallButtons from "./SmallButtons";
import { useContext } from "react";
import { FeedbackContext } from "../../../../store/feedback-context";

export default function ButtonBoard() {
  const capitalizeFirstLetter = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const { productData } = useContext(FeedbackContext);
  const categoriesOrder = [
    "All",
    "UI",
    "UX",
    ...Array.from(new Set(productData.map((product) => product.category))),
  ];

  const categories = ["All", "UI", "UX", "enhancement", "bug", "feature"];

  return (
    <div className={`${styles.buttonBoard} `}>
      {categories.map((category, index) => {
        return (
          <SmallButtons text={capitalizeFirstLetter(category)} key={index} />
        );
      })}
    </div>
  );
}
