import styles from "./MobileHeader.module.css";
import MainButton from "../mainButton/MainButton";
import GradientBoard from "../gradientBoard/GradientBoard";
export default function MobileHeader() {
  return (
    <div className="flex w-full flex-col md:hidden">
      <GradientBoard />
      <div className={styles.blueCont}>
        <form className={styles.sort}>
          <label htmlFor="sortBy">Sort By:</label>
          <select className={styles.selectOption}>
            <option value="mostUpvotes">Most Upvotes</option>
            <option value="leastUpvotes">Least Upvotes</option>
            <option value="mostComments">Most Comments</option>
            <option value="leastComments">Least Comments</option>
          </select>
        </form>

        <MainButton text="+ Add Feedback" />
      </div>
    </div>
  );
}
