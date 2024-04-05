import { createContext, useState } from "react";
import feedbacksData from "../data.json";
export const FeedbackContext = createContext({
  productData: [],
  setProduct: () => {},
  setComment: () => {},
  editProductData: () => {},
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

  // add comment in feedback user object
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
  }
  // edit feedback user product data
  function editProductData(id, title, category, status, description) {
    const updatedProductData = productData.map((product) => {
      if (product.id === +id) {
        return { ...product, title, category, status, description };
      }

      return product;
    });

    setProductData(updatedProductData);
  }

  return (
    <FeedbackContext.Provider
      value={{ productData, setProduct, editProductData, setComment }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
