import FeedbackContainer from "../UI/FeedbackContainer";
import MobileHeader from "../feedbackboard/headerContainer/MobileHeader";
import styles from "./FeedBackBoard.module.css";
import SideBar from "./sideBar/SideBar";
const FeedBackBoard = () => {
  return (
    <>
      <MobileHeader />
      <div className={styles.feedBackContainer}>
        <FeedbackContainer />
      </div>
      <SideBar />
    </>
  );
};

export default FeedBackBoard;
