/* eslint-disable */
import { Container, Row, Col } from "reactstrap";
// Button for feedback
import MainButton from "../components/feedbackboard/mainButton/MainButton";
import { useState } from "react";

const statuses = [
  {
    name: "Planned",
    id: 1,
    color: "#F49F85",
  },
  {
    name: "In-Progress",
    id: 2,
    color: "#AD1FEA",
  },
  {
    name: "Live",
    id: 3,
    color: "#62BCFA",
  },
];
function RoadMap() {
  const [stateNum, setStateNum] = useState(1);
  console.log(stateNum);
  return (
    <>
      <Container className="max-w-screen-desktop">
        <Row>
          <header className="bg-headerBg flex justify-between items-center text-textSecondary px-4 py-4 sm:rounded-lg">
            <Col
              lg="6"
              className="items-center justify-between text-[.6125rem] mobile:text-[.8125rem] flex flex-col"
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
          <div className="flex mobile:hidden">
            {statuses.map((status) => (
              <Col
                key={status.id}
                xs={12 / statuses.length}
                className="flex  justify-center items-center mt-3 relative"
                onClick={() => setStateNum(status.id)}
              >
                <span
                  className={`font-bold text-[13px] mb-2 ${
                    status.id === stateNum ? "text-title" : "text-viewD"
                  }`}
                >
                  {status.name}
                </span>
                <div
                  className={`w-[60%] h-1 bg-[${status.color}] absolute -bottom-1  rounded-sm`}
                />
              </Col>
            ))}
            <div className="mt-1" />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default RoadMap;
