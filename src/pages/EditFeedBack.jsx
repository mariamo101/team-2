import {useContext, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {FeedbackContext} from "../store/feedback-context";

function EditFeedBack() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {productData, editProductData} = useContext(FeedbackContext);

  // Find the product to edit
  const product = productData.find(product => product.id === Number(id));

  // If no product found, redirect to Error page
  useEffect(() => {
    if (!product) {
      navigate("*");
    }
  });

  // Update product data and navigate away

  return <div></div>;
}

export default EditFeedBack;
