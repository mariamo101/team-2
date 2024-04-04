import styles from "../feedbackgoard/FeedBackBoard.module.css";
import hamburger from "../../../public/assets/shared/mobile/icon-hamburger.svg";
import MainButton from "../mainButton/MainButton";

const FeedBackBoard = () => {
  return (
    <>
      <div className={styles.gradientBoard}>
        <div>
          <h1>Frontend Mentor</h1>
          <h2>Feedback Board</h2>
        </div>
        <img src={hamburger} alt="" />
      </div>
      <div className={styles.headContainer}>
        <section className={styles.sortSelect}>
          <label className={styles.sort} htmlFor="sort-select">
            Sort by: {"  "}
          </label>
          <select className={styles.selectOption}>
            <option value="most-upvotes" selected>
              Most Upvotes
            </option>
            <option value="recent">Least Upvotes</option>
            <option value="recent">Most Comments</option>
            <option value="recent">Least Comments</option>
          </select>
        </section>
        <MainButton />
      </div>
    </>
  );
};

export default FeedBackBoard;
