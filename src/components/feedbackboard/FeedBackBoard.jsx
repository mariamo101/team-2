import GradientBoard from "./gradientBoard/GradientBoard";
import MainButton from "../../components/feedbackboard/mainButton/MainButton";
import { Container, Row, Col } from "reactstrap";
import styles from "./FeedBackBoard.module.css";

const FeedBackBoard = () => {
  return (
    <>
      <GradientBoard />
      <div className="overflow-x-hidden">
        <Container className="p-0 m-0">
          <Row className="overflow-x-hidden">
            <Col lg="12" xs="12">
              <div className={styles.headContainer}>
                <section className={styles.sortSelect}>
                  <label className={styles.sort} htmlFor="sort-select">
                    Sort By :
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FeedBackBoard;
