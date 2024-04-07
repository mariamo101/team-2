/* eslint-disable */
import { useEffect, useState } from "react";
import styles from "../../styles/Comment.module.css";
import FeedbackReplyContainer from "./FeedbackReplyContainer";
// Context
import { useContext } from "react";
import { FeedbackContext } from "../../store/feedback-context";
// Comment component
const Comment = ({ comment }) => {
  const [isReply, setIsReply] = useState(false);
  const [isValidToDelete, setIsValidToDelete] = useState(false);

  const { deleteComment, mainData } = useContext(FeedbackContext);
  function toggleReply() {
    setIsReply((prev) => !prev);
  }
  useEffect(() => {
    if (comment.user.username === mainData.username) {
      setIsValidToDelete(true);
    } else {
      setIsValidToDelete(false);
    }
  }, [comment]);

  function handleDelete() {
    deleteComment(comment.id);
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
      {isValidToDelete && (
        <button
          className="bg-smBtnBg text-nums rounded-md mb-6 -mt-5 px-3 py-2  border-[1px] border-paragraph"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
      {isReply && (
        <FeedbackReplyContainer comment={comment} toggleReply={toggleReply} />
      )}
    </article>
  );
};
export default Comment;
