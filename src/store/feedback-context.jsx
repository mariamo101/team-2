import {createContext, useState} from "react";
import feedbacksData from "../data.json";
export const FeedbackContext = createContext({
  productData: [],
  setProduct: () => {},
  editProductData: () => {},
});

export default function FeedbackContextProvider({children}) {
  const [productData, setProductData] = useState(feedbacksData.productRequests);
  function setProduct(id, title, category, upvotes, status, description, comments) {
    setProductData(prev => [
      ...prev,
      {id, title, category, upvotes, status, description, comments},
    ]);
  }

  function editProductData(id, title, category, status, description) {
    const updatedProductData = productData.map(product => {
      if (product.id === +id) {
        return {...product, title, category, status, description};
      }

      return product;
    });

    setProductData(updatedProductData);
    console.log(productData);
  }

  return (
    <FeedbackContext.Provider value={{productData, setProduct, editProductData}}>
      {children}
    </FeedbackContext.Provider>
  );
}
