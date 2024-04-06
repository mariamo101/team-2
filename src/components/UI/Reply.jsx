import { useState } from "react";
import styles from "../../styles/Comment.module.css";
import FeedbackReplyContainer from "./FeedbackReplyContainer";
// Reply component
const Reply = ({ comment, reply }) => {
  const [isReply, setIsReply] = useState(false);

  function toggleReply() {
    setIsReply((prev) => !prev);
  }
  
  return (
    <article className={`pl-20 pr-8 w-full ${styles.animation}`}>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex gap-3 items-center md:gap-8">
          <img
            src={reply.user.image}
            alt={reply.user.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="m-0 text-title text-[.8125rem] font-bold">
              {reply.user.name}
            </h1>
            <p className="m-0 text-paragraph text-[.8125rem]">
              @{reply.user.username}
            </p>
          </div>
        </div>
        <button  onClick={toggleReply} className="text-[#4661E6] text-[.8125rem] font-semibold">
          Reply
        </button>
      </div>
      <p className="text-paragraph text-[15px] py-[17px]">
        <span className="text-[#AD1FEA] text-[13px] font-bold ">
          @{reply.replyingTo}
        </span>{" "}
        {reply.content}
      </p>
      {isReply && (
        <FeedbackReplyContainer comment={comment} reply={reply.user?.username} toggleReply={toggleReply} />
      )}
    </article>
  );
};
export default Reply;
