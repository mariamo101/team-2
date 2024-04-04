import { Col, Container, Row } from "reactstrap";

// svg files
import leftArrow from "/assets/shared/icon-arrow-left.svg";
// components
import FeedbackContainer from "../components/UI/FeedbackContainer";

function FeedBack() {

  return (
    <div className="bg-[#F7F8FD] p-6">
      <Container>
        <Row>
          <header className="flex items-center justify-between mb-[24px]">
            <nav className="flex items-center gap-[15px]">
              <img src={leftArrow} alt="left arrow" />
              <span className="text-[.8125rem]">Go Back</span>
            </nav>
            <button className="py-[10.5px] px-[16px] bg-[#4661E6] rounded-[10px] text-white text-[.8125rem]">
              Edit Feedback
            </button>
          </header>
        </Row>
        <Row>
         <FeedbackContainer/>
        </Row>
      </Container>
    </div>
  );
}

export default FeedBack;
