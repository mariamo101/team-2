import { createContext, useState } from "react";
import feedbacksData from "../data.json";
export const FeedbackContext = createContext({
  productData: [],
  setProduct: () => {},
  setComment: () => {},
});

export default function FeedbackContextProvider({ children }) {
  const [productData, setProductData] = useState(feedbacksData.productRequests);
  function setProduct(
    id,
    title,
    category,
    upvotes,
    status,
    description,
    comments
  ) {
    setProductData((prev) => [
      ...prev,
      { id, title, category, upvotes, status, description, comments },
    ]);
  }







 function setComment(feedbackId, commentId, content, user) {
    setProductData((prevData) => {
      return prevData.map((feedback) => {
        if (feedback.id === feedbackId) {
          // If the feedback matches the specified ID, add the comment
          return {
            ...feedback,
            comments: [
              ...(feedback.comments || []),
              { id: commentId, content, user },
            ],
          };
        }
        return feedback; // Return unchanged feedback if ID doesn't match
      });
    });
    console.log(productData);
  }


  return (
    <FeedbackContext.Provider value={{ productData, setProduct, setComment }}>
      {children}
    </FeedbackContext.Provider>
  );
}
