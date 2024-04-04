import {useParams} from "react-router";

function FeedBack() {
  const {id} = useParams();
  return <div>Feedback {id}</div>;
}

export default FeedBack;
