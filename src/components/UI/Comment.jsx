/* eslint-disable */
import { useState } from "react";
import styles from "../../styles/Comment.module.css";
import FeedbackReplyContainer from "./FeedbackReplyContainer";
// Comment component
const Comment = ({ comment }) => {
  const [isReply, setIsReply] = useState(false);

  function toggleReply() {
    setIsReply((prev) => !prev);
  }
  return (
    <article className={`px-8 ${styles.animation}`}>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex gap-3 items-center md:gap-8">
          <img
            src={comment.user.image}
            alt={comment.user.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="m-0 text-title text-[.8125rem] font-bold">
              {comment.user.name}
            </h1>
            <p className="m-0 text-paragraph text-[.8125rem]">
              @{comment.user.username}
            </p>
          </div>
        </div>
        <button
          onClick={toggleReply}
          className="text-[#4661E6] text-[.8125rem] font-semibold"
        >
          Reply
        </button>
      </div>
      <p className="text-paragraph text-[15px] py-[17px] pl-14">
        {comment.content}
      </p>
      {isReply && (
        <FeedbackReplyContainer comment={comment} toggleReply={toggleReply} />
      )}
    </article>
  );
};
export default Comment;
