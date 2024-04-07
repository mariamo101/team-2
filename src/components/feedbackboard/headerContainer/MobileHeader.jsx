import styles from "./MobileHeader.module.css";
import MainButton from "../mainButton/MainButton";
import suggestion from "/assets/suggestions/icon-suggestions.svg";
import { useContext } from "react";
import { FeedbackContext } from "../../../store/feedback-context";
export default function MobileHeader() {
  const { getFeedbacksByName } = useContext(FeedbackContext);
  const suggestions = getFeedbacksByName("suggestion").length;
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
          <select className={styles.selectOption}>
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
