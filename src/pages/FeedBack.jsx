/* eslint-disable */
// React imports
import {useNavigate, useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {FeedbackContext} from "../store/feedback-context";

// Reactstrap imports
import {Col, Container, Row} from "reactstrap";

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
  const {id} = useParams();

  // Context
  const {productData} = useContext(FeedbackContext);

  // State for feedback
  const [feedback, setFeedback] = useState(null);

  // Navigation hook
  const navigate = useNavigate();

  // Effect hook to fetch and set feedback data
  useEffect(() => {
    // Filter product data based on id
    const filtered = productData.filter(product => product.id === +id)[0];

    // Redirect to main page if no data found
    if (!filtered) return navigate("/");

    // Set feedback data to state
    setFeedback(filtered);
  }, []);

  // Get Comments Quantity
  const totalLength = feedback?.comments?.reduce((acc, comment)=>{
    if (comment.replies) {
      return acc + comment?.replies.length;
    } else {
      return acc + feedback?.comments?.length;
    }
  },0);

  return (
    <div className="bg-bodyC p-6 min-h-screen">
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
            <button className="py-[10.5px] px-[16px] bg-addBtn hover:bg-addBtnH rounded-[10px] text-textWhite text-[.8125rem]">
              Edit Feedback
            </button>
          </header>
        </Row>
        <Row>
          {/* Feedback Container */}
          <FeedbackContainer {...feedback} />
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
