/* eslint-disable */
import styles from "../../styles/Comment.module.css";
import { useForm } from "react-hook-form";
import { FeedbackContext } from "../../store/feedback-context";
import { useContext } from "react";
export default function FeedbackReplyContainer({
  comment,
  reply,
  toggleReply,
}) {
  const {
    register, // To register form inputs
    handleSubmit, // To handle form submission
    formState: { errors }, // Form state object containing errors
    watch,
    reset, // To watch form input values
  } = useForm();

  // Watching the userValue input
  const commentValue = watch("commentValue");

  const { setReplies } = useContext(FeedbackContext);
  const onSubmit = async (data) => {
    setReplies(
      Math.floor(Math.random() * Date.now()),
      comment?.id,
      commentValue,
      reply ? reply : comment?.user?.username
    );
    toggleReply();
  };

  return (
    <div
      className={`flex flex-col  mb-8 gap-2 sm:gap-0 pb-3 ${styles.animationBackward}`}
    >
      <div className=" sm:w-[90%] flex flex-col sm:flex-row justify-center">
        <textarea
          {...register("commentValue", {
            required: "Text is required",
            validate: (value) => {
              if (value.length < 8) {
                return "Email must include at least 8 charachter";
              }
              return true;
            },
          })}
          className="flex w-[70%]  p-4 text-paragraph rounded-[5px] bg-inputBg
               ml-5 md:ml-auto
              outline-none mb-1
              focus:outline focus:outline-offset-2 focus:outline-inputBorderS
              "
          rows={2}
        ></textarea>

        <button
          onClick={handleSubmit(onSubmit)}
          className="h-fit w-[120px] sm:w-fit mx-5 sm:translate-y-0 py-[10.5px] px-[16px]  bg-addBtn hover:bg-addBtnH 
            rounded-[10px] text-textWhite text-[.8125rem]"
        >
          Post Reply
        </button>
      </div>
      {errors.commentValue && (
        <div className="text-red-600 inline-block  animate-pulse ml-7 text-[13px] text-center">
          {errors.commentValue.message}
        </div>
      )}
    </div>
  );
}
