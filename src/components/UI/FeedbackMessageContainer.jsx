/* eslint-disable */
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FeedbackContext } from "../../store/feedback-context";

const FeedbackMessageContainer = ({feedbackId}) => {
  // Destructuring useForm hook and extracting required methods and states
  const {
    register, // To register form inputs
    handleSubmit, // To handle form submission
    setError, // To set form errors dynamically
    formState: { errors, isSubmitting }, // Form state object containing errors and submission status
    watch,
    reset, // To watch form input values
  } = useForm();

  // Watching the userValue input
  const userValue = watch("userValue");
  
  const { setComment,productData } = useContext(FeedbackContext);
  // Function to handle form submission
  const onSubmit = async (data) => {
    setComment(
      +feedbackId, // ID of the feedback where you want to add the comment
      Math.floor(Math.random() * Date.now()), // ID of the comment
      userValue, // Content of the comment
    );
    reset();
  };

  return (
    <form className="bg-containerBg rounded-[10px] p-0">
      {/* Title */}
      <h2 className="text-title text-[18px] font-bold p-6 ">Add Comment</h2>

      {/* Textarea for comment */}
      <textarea
        {...register("userValue", {
          required: "Can’t be blank",
          validate: (value) => {
            // Custom validation for maximum characters
            if (value.length > 250) {
              return "Sign: You can not type more than 250 characters";
            }else if(value.length <= 8){
              return "Too few letters. Enter at least 8 letter";
            }
            return true;
          },
        })}
        maxLength={250}
        className="flex w-[90%] mx-auto p-4 text-paragraph rounded-[5px] bg-inputBg
              outline-none 
              focus:outline focus:outline-offset-2 focus:outline-inputBorderS
              "
        placeholder="Type your comment here"
      />

      {/* Error message for validation */}
      {errors.userValue && (
        <div className="text-inputBorderE pl-10 pt-2">
          {errors.userValue.message}
        </div>
      )}

      {/* Character count */}
      <div className="flex w-[90%] mx-auto justify-between items-center  py-6">
        <p className="m-0 text-paragraph text-[.8125rem]">
          {250 - +userValue?.trim().length} Characters left
        </p>

        {/* Submit button */}
        <button
          onClick={handleSubmit(onSubmit)}
          //   onClick={()=> addComment()}
          className="py-[10.5px] px-[16px]  bg-addBtn hover:bg-addBtnH rounded-[10px] text-textWhite text-[.8125rem]"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default FeedbackMessageContainer;
