import styles from '../../styles/Comment.module.css'
// Reply component
const Reply = ({ reply }) => {
  return (
    <article className={`pl-20 pr-8 ${styles.animation}`}>
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
        <button className="text-[#4661E6] text-[.8125rem] font-semibold">
          Reply
        </button>
      </div>
      <p className="text-paragraph text-[15px] py-[17px]">{reply.content}</p>
    </article>
  );
};
export default Reply;