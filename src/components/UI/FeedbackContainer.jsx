// svg files
import upArrow from "/assets/shared/icon-arrow-up.svg";
import comments from "/assets/shared/icon-comments.svg";
// User Feedback Container (INFO)
function FeedbackContainer() {
  return (
    <div>
      <div
        className="bg-white  rounded-[10px] justify-between items-center
           p-[24px] md:p-[28px] lg:px-[32px]
          flex-col md:flex md:flex-row
           "
      >
        <div className="flex gap-[40px]">
          <button className="hidden md:flex flex-col items-center gap-[10px] bg-[#F2F4FE] px-[13px] py-[6px] rounded-[10px] h-fit">
            <img src={upArrow} alt="up arrow" />
            <span className="text-[.8125rem] text-[#3A4374] font-bold">99</span>
          </button>
          <div>
            <h1 className="text-[#3A4374] text-[.8125rem]">
              title
            </h1>
            <p>
                description
            </p>
            <button className="bg-[#F2F4FE] text-[#4661E6] px-[13px] py-[6px] rounded-[10px] mb-[14px]">
              Feature
            </button>
          </div>
        </div>

        <div className="md:px-5 flex justify-between">
          <button className="flex items-center gap-[10px] bg-[#F2F4FE] px-[13px] py-[6px] rounded-[10px] h-fit  md:hidden">
            <img src={upArrow} alt="up arrow" />
            <span className="text-[.8125rem] text-[#3A4374] font-bold">99</span>
          </button>
          <div className="flex items-center gap-2">
            <img src={comments} alt="comments" />
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackContainer;
