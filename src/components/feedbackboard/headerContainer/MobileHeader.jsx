import styles from "./MobileHeader.module.css";
import MainButton from "../mainButton/MainButton";
import suggestion from "/assets/suggestions/icon-suggestions.svg";
import { useContext, useEffect } from "react";
import { FeedbackContext } from "../../../store/feedback-context";
export default function MobileHeader() {
  const { getFeedbacksByName,filteredProductsByCommentsAndUpvotes } = useContext(FeedbackContext);
    
  const suggestions = getFeedbacksByName("suggestion").length;

  
  function sortMostComments(type){
    filteredProductsByCommentsAndUpvotes(type.target.value)

  }
  return (
    <div className="flex w-full flex-col lg:flex-col">
      <div className={styles.blueCont}>
        <div className={styles.headerSuggestions}>
          <img className={styles.suggestion} src={suggestion} alt="" />
          <span className={styles.suggestionSpan}>{suggestions}</span>
          <p className={styles.suggestionP}>Suggestions</p>
        </div>
        <form className={styles.sort}>
          <label htmlFor="sortBy">Sort By:</label>
          <select className={styles.selectOption} defaultValue='mostUpvotes' onChange={(e)=>sortMostComments(e)}>
            <option value="mostUpvotes">Most Upvotes</option>
            <option value="leastUpvotes">Least Upvotes</option>
            <option value="mostComments">Most Comments</option>
            <option value="leastComments">Least Comments</option>
          </select>
        </form>

        <MainButton path="/new-feedback" text="+ Add Feedback" />
      </div>
    </div>
  );
}
