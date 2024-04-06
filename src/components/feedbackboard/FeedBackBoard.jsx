import FeedbackContainer from "../UI/FeedbackContainer";
import MobileHeader from "../feedbackboard/headerContainer/MobileHeader";
import styles from "./FeedBackBoard.module.css";
import { useContext } from "react";
import { FeedbackContext } from "../../store/feedback-context";
import { Container } from "reactstrap";
import SideBar from "./sideBar/SideBar";
import emptyFeedback from "/assets/suggestions/illustration-empty.svg";
import MainButton from "./mainButton/MainButton";
const FeedBackBoard = () => {
  const { productData } = useContext(FeedbackContext);
  console.log(productData);
  if (productData.length === 12) {
    return (
      <>
        <MobileHeader />
        <Container>
          <div className={styles.noFeedback}>
            <img src={emptyFeedback} alt="Empty Feedbacks" />
            <h1 className={styles.noFeedbackYet}>There is no feedback yet.</h1>
            <p className={styles.noFeedbackP}>
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <MainButton text="+ Add Feedback" />
          </div>
        </Container>
      </>
    );
  }
  return (
    <>
      <MobileHeader />
      <div className={styles.feedBackContainer}>
        {productData.map((product) => (
          <Container key={Math.floor(Math.random() * Date.now())}>
            <FeedbackContainer {...product} />
            <div className="mb-5" />
          </Container>
        ))}
      </div>
      <SideBar />
    </>
  );
};

export default FeedBackBoard;
