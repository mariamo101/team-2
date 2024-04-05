import {useContext} from "react";
import {FeedbackContext} from "../store/feedback-context";
import {useNavigate, useParams} from "react-router-dom";

function EditFeedBack() {
  const {id} = useParams();

  return <div>{id}</div>;
}

export default EditFeedBack;
