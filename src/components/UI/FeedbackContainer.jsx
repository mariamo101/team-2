/* eslint-disable */
import { useNavigate } from "react-router-dom";
// Import SVG files
import upArrow from "/assets/shared/icon-arrow-up.svg";
import commentsSvg from "/assets/shared/icon-comments.svg";
import { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../../store/feedback-context";

// User Feedback Container Component
function FeedbackContainer({
  id,
  title,
  description,
  category,
  upvotes,
  comments,
  status,
  commentsLength,
  isRoadMap = false,
}) {
  const [totalLength, setTotalLength] = useState(0);
  const navigate = useNavigate();
  // Ensure comments array is initialized

  // Calculate total length of comments and replies

  const { productData } = useContext(FeedbackContext);
  useEffect(() => {
    // Filter product data based on id
    const filtered = productData.find((product) => product.id === +id);
    const getLength = filtered?.comments?.reduce((acc, comment) => {
      if (comment.replies) {
        return acc + comment.replies.length + 1; // Adding 1 for the original comment
      } else {
        return acc + 1; // Adding 1 for the comment itself
      }
    }, 0);

    setTotalLength(getLength);
  }, []);

  // Get Status Colors
  const getColor =
    status?.toLowerCase() === "planned"
      ? "bg-[#F49F85]"
      : status?.toLowerCase() === "in-progress"
      ? "bg-[#AD1FEA]"
      : "bg-[#62BCFA]";
  return (
    <div
      className={`flex flex-col gap-[20px] bg-white rounded-[10px] p-[24px] md:p-[28px] lg:px-[32px] relative`}
    >
      {/* User Feedback Container */}

      {/* If Roadmap Page */}
      {isRoadMap && status?.toLowerCase() !== "suggestion" && (
        <div className="status flex items-center">
          <div
            className={`${getColor} absolute w-full h-2 left-0 top-0 rounded-t-full`}
          />
          <div className={`w-2 h-2 rounded-full ${getColor}`} />
          <div className="pl-3 text-[#647196] text-[.8125rem]">{status}</div>
        </div>
      )}

      <div className="justify-between items-center md:flex md:flex-row">
        <div className="flex gap-[40px]">
          {/* Upvote button */}

          <button className="hidden md:flex flex-col items-center gap-[10px] bg-[#F2F4FE] px-[13px] py-[6px] rounded-[10px] h-fit">
            <img src={upArrow} alt="up arrow" />
            <span className="text-[.8125rem] text-[#3A4374] font-bold">
              {upvotes}
            </span>
          </button>
          {/* Feedback details and Redirect to edit page*/}
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(`/edit-feedback/${id}`);
            }}
          >
            <h1 className="text-title text-[.8125rem] font-bold">{title}</h1>
            <p className="text-paragraph">{description}</p>
            <button className="bg-[#F2F4FE] text-[#4661E6] px-[13px] py-[6px] rounded-[10px] mb-[14px]">
              {category}
            </button>
          </div>
        </div>

        {/* Comments and upvote button for mobile */}
        <div className="md:px-5 flex justify-between">
          <button className="flex items-center gap-[10px] bg-[#F2F4FE] px-[13px] py-[6px] rounded-[10px] h-fit md:hidden">
            <img src={upArrow} alt="up arrow" />
            <span className="text-[.8125rem] text-[#3A4374] font-bold">
              {upvotes}
            </span>
          </button>
          {/* Comments count */}
          <div className="flex items-center gap-2">
            <img src={commentsSvg} alt="comments" />
            <span>{commentsLength ? commentsLength : totalLength | 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackContainer;
