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
  // Comment component
  const Comment = ({ comment }) => {
    return (
      <article className="px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-3 items-center md:gap-8">
            <img
              src={comment.user.image}
              alt={comment.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="m-0 text-title text-[13px] font-bold">
                {comment.user.name}
              </h1>
              <p className="m-0 text-paragraph text-[13px]">
                @{comment.user.username}
              </p>
            </div>
          </div>
          <button className="text-[#4661E6] text-[13px] font-semibold">
            Reply
          </button>
        </div>
        <p className="text-paragraph text-[15px] py-[17px]">
          {comment.content}
        </p>
      </article>
    );
  };

  // Reply component
  const Reply = ({ reply }) => {
    return (
      <article className="pl-20 pr-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-3 items-center md:gap-8">
            <img
              src={reply.user.image}
              alt={reply.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="m-0 text-title text-[13px] font-bold">
                {reply.user.name}
              </h1>
              <p className="m-0 text-paragraph text-[13px]">
                @{reply.user.username}
              </p>
            </div>
          </div>
          <button className="text-[#4661E6] text-[13px] font-semibold">
            Reply
          </button>
        </div>
        <p className="text-paragraph text-[15px] py-[17px]">{reply.content}</p>
      </article>
    );
  };

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
              {feedback?.comments?.length} Comments
            </h4>
            {feedback?.comments?.map((comment, index) => (
              <div key={comment.id}>
                <Comment comment={comment} />

                {/* Render replies */}
                {comment.replies &&
                  comment.replies.map((reply) => (
                    <Reply key={reply.id} reply={reply} />
                  ))}
                {index !== feedback?.comments?.length - 1 && <hr />}
              </div>
            ))}
          </main>
        </Row>
      </Container>
    </div>
  );
}

export default FeedBack;
