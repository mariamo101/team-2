import FeedbackContainer from "../UI/FeedbackContainer";
import MobileHeader from "../feedbackboard/headerContainer/MobileHeader";
import styles from "./FeedBackBoard.module.css";
import { useContext } from "react";
import { FeedbackContext } from "../../store/feedback-context";
import { Container } from "reactstrap";
import SideBar from "./sideBar/SideBar";
const FeedBackBoard = () => {
  const { productData } = useContext(FeedbackContext);
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
