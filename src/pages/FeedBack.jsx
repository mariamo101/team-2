/* eslint-disable */
// React imports
import { useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../store/feedback-context";

// Reactstrap imports
import { Col, Container, Row } from "reactstrap";

// SVG files
import leftArrow from "/assets/shared/icon-arrow-left.svg";

// Custom component imports
import FeedbackContainer from "../components/UI/FeedbackContainer";

// Feedback Page Component
function FeedBack() {
  // Router parameters
  const { id } = useParams();

  // Context
  const { productData } = useContext(FeedbackContext);

  // State for feedback
  const [feedback, setFeedback] = useState(null);

  // Navigation hook
  const navigate = useNavigate();

  // Effect hook to fetch and set feedback data
  useEffect(() => {
    // Filter product data based on id
    const filtered = productData.filter((product) => product.id === +id)[0];

    // Redirect to main page if no data found
    if (!filtered) return navigate("/");

    // Set feedback data to state
    setFeedback(filtered);
  }, []);

  return (
    <div className="bg-[#F7F8FD] p-6">
      <Container>
        <Row>
          {/* Header */}
          <header className="flex items-center justify-between mb-[24px]">
            {/* Navigation */}
            <nav className="flex items-center gap-[15px]">
              <img src={leftArrow} alt="left arrow" />
              <span className="text-title">Go Back</span>
            </nav>
            {/* Edit Feedback button */}
            <button className="py-[10.5px] px-[16px] bg-[#4661E6] rounded-[10px] text-textWhite text-[.8125rem]">
              Edit Feedback
            </button>
          </header>
        </Row>
        <Row>
          {/* Feedback Container */}
          <FeedbackContainer {...feedback} />
        </Row>
      </Container>
    </div>
  );
}

export default FeedBack;
