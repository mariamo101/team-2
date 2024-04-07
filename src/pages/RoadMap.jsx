/* eslint-disable */
import {Container, Row} from "reactstrap";
// Button for feedback
import MainButton from "../components/feedbackboard/mainButton/MainButton";
// SV files
import leftArrow from "/assets/shared/icon-arrow-left.svg";
function RoadMap() {
  return (
    <>
      <Container className="max-w-screen-desktop">
        <Row>
          <header className="bg-headerBg flex justify-between items-center text-textSecondary px-4 py-4">
            <div className="flex flex-col items-center justify-center">
              <div className="flex  items-center gap-3 cursor-pointer flex-wrap">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 9L2 5l4-4"
                    stroke="#fff"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
                <span className="text-[.8125rem] font-bold">Go Back</span>
              </div>
              <p className="m-0 tracking-[-0.25px] font-bold">Roadmap</p>
            </div>

            <MainButton text="+ Add Feedback" path="/new-feedback" />
          </header>
        </Row>
      </Container>
    </>
  );
}

export default RoadMap;
