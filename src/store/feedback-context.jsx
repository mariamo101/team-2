import { createContext, useState } from "react";
import feedbacksData from "../data.json";
export const FeedbackContext = createContext({
  productData: [],
  setProduct: () => {},
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

  return (
    <FeedbackContext.Provider value={{ productData, setProduct }}>
      {children}
    </FeedbackContext.Provider>
  );
}
