import FeedbackContainer from "../UI/FeedbackContainer";
import MobileHeader from "../feedbackboard/headerContainer/MobileHeader";
import styles from "./FeedBackBoard.module.css";
import { useContext } from "react";
import { FeedbackContext } from "../../store/feedback-context";
import { Container, Row, Col } from "reactstrap";
import emptyFeedback from "/assets/suggestions/illustration-empty.svg";
import MainButton from "./mainButton/MainButton";
import GradientBoard from "./gradientBoard/GradientBoard";
import GradiantColuns from "./gradientBoard/desktopRow/GradiantColuns";

const FeedBackBoard = () => {
  const { productData } = useContext(FeedbackContext);
  if (productData.length === 0) {
    return (
      <>
        <Container>
          <div className={styles.noFeedback}>
            <img src={emptyFeedback} alt="Empty Feedbacks" />
            <h1 className={styles.noFeedbackYet}>There is no feedback yet.</h1>
            <p className={styles.noFeedbackP}>
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <MainButton path="/new-feedback" text="+ Add Feedback" />
          </div>
        </Container>
      </>
    );
  }
  return (
    <>
      <Row className="place-content-center">
        <Col lg="3">
          <GradiantColuns />
        </Col>
        <Col lg="7" md="12">
          <MobileHeader />
          <div>
            {productData.map((product) => (
              <Container key={Math.floor(Math.random() * Date.now())}>
                <FeedbackContainer {...product} />
                <div className="mb-5" />
              </Container>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FeedBackBoard;
