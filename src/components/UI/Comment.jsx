/* eslint-disable */
import { useState } from "react";
import styles from "../../styles/Comment.module.css";
import { useContext } from "react";
import { FeedbackContext } from "../../store/feedback-context";
import { useForm } from "react-hook-form";
// Comment component
const Comment = ({ comment }) => {
  const {
    register, // To register form inputs
    handleSubmit, // To handle form submission
    formState: { errors }, // Form state object containing errors 
    watch,
    reset, // To watch form input values
  } = useForm();

  // Watching the userValue input
  const commentValue = watch("commentValue");

  const [isReply, setIsReply] = useState(false);
  const { setReplies, productData } = useContext(FeedbackContext);

  function submitReply(commentId, reply = "afasfasfasfsafasfaf") {
    setReplies(comment.id, reply);
    // console.log(productData);
  }
  const onSubmit = async (data) => {
    setReplies(comment?.id, commentValue, comment?.user?.username);
    setIsReply(false)
    reset();
  };

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
          onClick={() => setIsReply((prev) => !prev)}
          className="text-[#4661E6] text-[.8125rem] font-semibold"
        >
          Reply
        </button>
      </div>
      <p className="text-paragraph text-[15px] py-[17px] pl-14">
        {comment.content}
      </p>
      {isReply && (
        <div
          className={`relative flex flex-col sm:flex-row gap-4 sm:gap-0 pb-3 ${styles.animationBackward}`}
        >
          <textarea
            {...register("commentValue", {
              required: 'Text is required',
              validate: (value)=>{
                if(value.length < 8){
                  return "Email must include at least 8 charachter";
                }
                return true;
              }
            })}
            className="flex w-[70%] mx-auto p-4 text-paragraph rounded-[5px] bg-inputBg
              outline-none 
              focus:outline focus:outline-offset-2 focus:outline-inputBorderS
              "
            rows={2}
          ></textarea>
         
          <button
            onClick={handleSubmit(onSubmit)}
            className="h-fit w-[120px] sm:w-fit ml-16 sm:ml-0 py-[10.5px] px-[16px]  bg-addBtn hover:bg-addBtnH 
            rounded-[10px] text-textWhite text-[.8125rem]"
          >
            Post Reply
          </button>
          {
            errors.commentValue && <div className="text-red-600 inline-block absolute bottom-[-20px] left-16 animate-pulse">{errors.commentValue.message}</div>
          }
        </div>
      )}
    </article>
  );
};
export default Comment;
