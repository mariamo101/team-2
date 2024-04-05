import {FeedbackContext} from "../store/feedback-context";
import {useParams} from "react-router-dom";
import {useContext} from "react";

function EditFeedBack() {
  const {id} = useParams();
  const {productData, editProductData} = useContext(FeedbackContext);
  const product = productData.filter(product => product.id === +id);
  console.log(product);

  return (
    <div>
      <button
        onClick={() => editProductData(id, "Hello World", "start", "suggestion", "adadasdsadsad")}
      >
        dasdsadas
      </button>
    </div>
  );
}

export default EditFeedBack;
