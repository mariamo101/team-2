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
import Comment from "../components/UI/Comment";
import Reply from "../components/UI/Reply";
import FeedbackMessageContainer from "../components/UI/FeedbackMessageContainer";

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

  // State for total length of comments
  const [totalLength, setTotalLength] = useState(0);

  // Effect hook to fetch and set feedback data
  useEffect(() => {
    // Filter product data based on id
    const filtered = productData.find((product) => product.id === +id);

    // Redirect to main page if no data found
    if (!filtered) {
      navigate("/");
      return;
    }

    // Set feedback data to state
    setFeedback(filtered);

    // Calculate total length of comments
    const getLength = filtered?.comments?.reduce((acc, comment) => {
      if (comment.replies) {
        return acc + comment.replies.length + 1; // Adding 1 for the original comment
      } else {
        return acc + 1; // Adding 1 for the comment itself
      }
    }, 0);
    setTotalLength(getLength);
  }, [id,productData]);

  return (
    <div className="bg-bodyC p-6 min-h-screen">
      <Container>
        <Row>
          {/* Header */}
          <header className="flex items-center justify-between mb-[24px]">
            {/* Navigation */}
            <nav className="flex items-center gap-[15px] cursor-pointer">
              <img src={leftArrow} alt="left arrow" />
              <span className="text-title " onClick={()=>navigate(-1)}>Go Back</span>
            </nav>
            {/* Edit Feedback button */}
            <button className="py-[10.5px] px-[16px] bg-addBtn hover:bg-addBtnH rounded-[10px] text-textWhite text-[.8125rem]"
            onClick={()=>navigate(`/edit-feedback/${id}`)}
            >
              Edit Feedback
            </button>
          </header>
        </Row>
        <Row>
          {/* Feedback Container */}
          <FeedbackContainer {...feedback} commentsLength={totalLength}/>
        </Row>
        <Row>
          <main className="my-5 bg-containerBg rounded-lg p-6">
            <h4 className="text-title text-[18px] font-bold tracking-[0.25px] pl-6">
              {!feedback?.comments?.length
                ? "No Comments yet"
                : `${totalLength} Comments`}
            </h4>
            {feedback?.comments?.map((comment, index) => (
              <div key={comment.id}>
                <Comment comment={comment} />

                {/* Render replies */}
                {comment.replies &&
                  comment.replies.map((reply) => (
                    <div className="flex relative h-full">
                      <div
                        className={`w-[0.7px] h-[150%] bg-[#647196] opacity-[.1] absolute bottom-0 left-[51px]`}
                      />
                      <Reply key={reply.id} reply={reply} />
                    </div>
                  ))}
                {index !== feedback?.comments?.length - 1 && <hr />}
              </div>
            ))}
          </main>
        </Row>
        <Row>
          <FeedbackMessageContainer />
        </Row>
      </Container>
    </div>
  );
}

export default FeedBack;
