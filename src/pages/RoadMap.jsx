/* eslint-disable */
import { Container, Row, Col } from "reactstrap";
// Button for feedback
import MainButton from "../components/feedbackboard/mainButton/MainButton";
import { useEffect, useState } from "react";
// styles
import styles from "../styles/RoadMap.module.css";
import RoadMapFilter from "../components/UI/RoadMapFilter";
// Contexts
import { useContext } from "react";
import { FeedbackContext } from "../store/feedback-context";

const statuses = [
  {
    name: "Planned",
    value: "planned",
    id: 1,
    color: "#F49F85",
  },
  {
    name: "In-Progress",
    value: "in-progress",
    id: 2,
    color: "#AD1FEA",
  },
  {
    name: "Live",
    value: "live",
    id: 3,
    color: "#62BCFA",
  },
];
function RoadMap() {
  const [stateNum, setStateNum] = useState(1);
  const { getFeedbacksByName } = useContext(FeedbackContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const filteredNames= statuses.filter(item=> item.id === stateNum)[0].value;
    setProducts(getFeedbacksByName(filteredNames))
  }, [stateNum]);
  console.log(products);

  return (
    <>
      <Container className="max-w-screen-desktop">
        <Row>
          <header className="bg-headerBg flex justify-between items-center text-textSecondary px-4 py-4 mobile:rounded-lg">
            <Col
              lg="1"
              className="items-center justify-between  text-[.6125rem] mobile:text-[.8125rem] flex flex-col"
            >
              <div className="flex  items-center gap-3 cursor-pointer flex-wrap  flex-row self-start">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 9L2 5l4-4"
                    stroke="#fff"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
                <span className=" font-bold">Go Back</span>
              </div>
              <p className="m-0 tracking-[-0.25px] font-bold">Roadmap</p>
            </Col>
            <Col lg="6" className="flex flex-row-reverse">
              <MainButton text="+ Add Feedback" path="/new-feedback" />
            </Col>
          </header>
        </Row>
        <Row>
          <div className="flex tablet:hidden">
            {statuses.map((status) => (
              <Col
                key={status.id}
                xs={12 / statuses.length}
                className="flex  justify-center items-center mt-3 relative"
                onClick={() => setStateNum(status.id)}
              >
                <span
                  className={`font-bold text-[13px] mb-2 cursor-pointer ${
                    status.id === stateNum ? "text-title" : "text-viewD"
                  }`}
                >
                  {status.name}
                </span>
                {stateNum === status.id && (
                  <div
                    className={`${styles.animation} w-[60%] h-1 mb-1 bg-[${status.color}] absolute -bottom-1  rounded-sm`}
                  />
                )}
              </Col>
            ))}
          </div>
          <div className="h-[1px] w-full bg-[#8C92B3] opacity-45 tablet:hidden" />
        </Row>
      </Container>
      <Container className="">
        <Row>
          {
            products && products.map(feedback=>(

              <RoadMapFilter feedback={feedback}/>
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default RoadMap;
