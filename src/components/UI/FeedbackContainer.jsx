/* eslint-disable */
// Import SVG files
import upArrow from "/assets/shared/icon-arrow-up.svg";
import commentsSvg from "/assets/shared/icon-comments.svg";

// User Feedback Container Component
function FeedbackContainer({
  title,
  description,
  category,
  upvotes,
  comments,
}) {
  // Ensure comments array is initialized
  const allComments = comments || [];

  // Calculate total length of comments and replies
  const totalLength = allComments.reduce((acc, comment) => {
      if (comment.replies) {
          return acc + comment?.replies.length;
      } else {
          return acc + comments?.length;
      }
  }, 0);


  return (
    <div>
      {/* User Feedback Container */}
      <div className="bg-white rounded-[10px] justify-between items-center p-[24px] md:p-[28px] lg:px-[32px] flex-col md:flex md:flex-row">
        <div className="flex gap-[40px]">
          {/* Upvote button */}
          <button className="hidden md:flex flex-col items-center gap-[10px] bg-[#F2F4FE] px-[13px] py-[6px] rounded-[10px] h-fit">
            <img src={upArrow} alt="up arrow" />
            <span className="text-[.8125rem] text-[#3A4374] font-bold">
              {upvotes}
            </span>
          </button>
          {/* Feedback details */}
          <div>
            <h1 className="text-[#3A4374] text-[.8125rem]">{title}</h1>
            <p>{description}</p>
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
            <span>{totalLength}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackContainer;
