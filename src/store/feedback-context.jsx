/* eslint-disable */
import {createContext, useState} from "react";
import feedbacksData from "../data.json";
export const FeedbackContext = createContext({
  productData: [],
  setProduct: () => {},
  setComment: () => {},
  editProductData: () => {},
  changeUpVotes: () => {},
  setReplies: () => {},
  removeProduct: () => {},
});

export default function FeedbackContextProvider({children}) {
  const [productData, setProductData] = useState(feedbacksData.productRequests);
  const [mainData, setMainData] = useState(feedbacksData.currentUser);

  function setProduct(id, title, category, upvotes, status, description, comments) {
    setProductData(prev => [
      ...prev,
      {id, title, category, upvotes, status, description, comments},
    ]);
  }
  function removeProduct(feedbackId) {
    const filtered = productData.filter(product => product.id !== feedbackId);
    setProductData(filtered);
  }

  // add comment in feedback user object
  function setComment(feedbackId, commentId, content, user) {
    setProductData(prevData => {
      return prevData.map(feedback => {
        if (feedback.id === feedbackId) {
          // If the feedback matches the specified ID, add the comment
          return {
            ...feedback,
            comments: [...(feedback.comments || []), {id: commentId, content, user}],
          };
        }
        return feedback; // Return unchanged feedback if ID doesn't match
      });
    });
  }
  // edit feedback user product data
  function editProductData(id, title, category, status, description) {
    const updatedProductData = productData.map(product => {
      if (product.id === +id) {
        return {...product, title, category, status, description};
      }

      return product;
    });

    setProductData(updatedProductData);
  }

  function changeUpVotes(feedbackId) {
    setProductData(prev => {
      return prev.map(feedback => {
        if (feedback.id === feedbackId) {
          return {
            ...feedback,
            upvotes: feedback.isUpVoted ? feedback.upvotes - 1 : feedback.upvotes + 1,
            isUpVoted: !feedback.isUpVoted,
          };
        } else {
          return feedback;
        }
      });
    });
  }

  function setReplies(commentId, reply, commentedTo) {
    // Find the comment with the given ID in the productData
    const updatedProductData = productData.map(item => {
      if (item.comments) {
        // Find the comment with the given ID
        const updatedComments = item.comments.map(comment => {
          if (comment.id === commentId) {
            // Add the reply to the comment
            return {
              ...comment,
              replies: comment.replies
                ? [
                    ...comment.replies,
                    {
                      content: reply,
                      replyingTo: commentedTo,
                      user: mainData,
                    },
                  ]
                : [
                    {
                      content: reply,
                      replyingTo: commentedTo,
                      user: mainData,
                    },
                  ],
            };
          }
          return comment;
        });

        // Update the comments for the current item
        return {
          ...item,
          comments: updatedComments,
        };
      }
      return item;
    });

    // Update the productData with the updated comments
    // You may need to setProductData(updatedProductData) here depending on your application logic
    setProductData(updatedProductData);
  }

  return (
    <FeedbackContext.Provider
      value={{
        productData,
        setProduct,
        editProductData,
        setComment,
        changeUpVotes,
        setReplies,
        removeProduct,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
