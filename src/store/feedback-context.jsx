/* eslint-disable */
import React, { createContext, useEffect, useState } from "react";
import feedbacksData from "../data.json";

export const FeedbackContext = createContext({
  // Default context values
  productData: [],
  setProduct: () => {},
  setComment: () => {},
  editProductData: () => {},
  changeUpVotes: () => {},
  setReplies: () => {},
  removeProduct: () => {},
  mainData: [],
  deleteReplay: () => {},
  deleteComment: () => {},
  getFeedbacksByName: () => {},
  filteredProductsByCategory: () => {},
  filteredProductsByCommentsAndUpvotes: () => {},
  mainCategory: [],
  categories: [],
});

export default function FeedbackContextProvider({ children }) {
  // State hooks
  const [productData, setProductData] = useState(() => {
    const storedData = localStorage.getItem("myData");
    return storedData ? JSON.parse(storedData) : feedbacksData.productRequests;
  });
  const [mainData, setMainData] = useState(feedbacksData.currentUser);
  const [mainCategory, setMainCategory] = useState(productData);

  // Update localStorage whenever productData changes
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(productData));
  }, [productData]);

  // When Category changing, sort MAIN CATEGORY
  useEffect(() => {
    filteredProductsByCategory(localStorage.getItem("category") ||  localStorage.setItem('category', 'All'))
    filteredProductsByCommentsAndUpvotes('mostUpvotes');
  }, [localStorage.getItem("category")]);

  // Function to add a new product
  const setProduct = (id, title, category, upvotes, status, description, comments) => {
    setProductData(prev => [
      ...prev,
      { id, title, category, upvotes, status, description, comments },
    ]);
    setMainCategory(prev => [
      ...prev,
      { id, title, category, upvotes, status, description, comments }
    ]);
  };

  // Function to remove a product
  const removeProduct = (feedbackId) => {
    const filtered = productData.filter(product => product.id !== feedbackId);
    setProductData(filtered);
    setMainCategory(filtered);
  };

  // Function to add a comment to a feedback
  const setComment = (feedbackId, commentId, content) => {
    setProductData(prevData => prevData.map(feedback => {
      if (feedback.id === feedbackId) {
        return {
          ...feedback,
          comments: [...(feedback.comments || []), { id: commentId, content, user: mainData }],
        };
      }
      return feedback;
    }));
  };

  // Function to edit product data
  const editProductData = (id, title, category, status, description) => {
    const updatedProductData = productData.map(product => {
      if (product.id === +id) {
        return { ...product, title, category, status, description };
      }
      return product;
    });
    setProductData(updatedProductData);
  };

  // Function to change upvotes of a feedback
  const changeUpVotes = (feedbackId) => {
    setProductData(prev => prev.map(feedback => {
      if (feedback.id === feedbackId) {
        return {
          ...feedback,
          upvotes: feedback.isUpVoted ? feedback.upvotes - 1 : feedback.upvotes + 1,
          isUpVoted: !feedback.isUpVoted,
        };
      } else {
        return feedback;
      }
    }));
  };

  // Function to add a reply to a comment
  const setReplies = (userId, commentId, reply, commentedTo) => {
    const updatedProductData = productData.map(item => {
      if (item.comments) {
        const updatedComments = item.comments.map(comment => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: comment.replies
                ? [...comment.replies, { userId, content: reply, replyingTo: commentedTo, user: mainData }]
                : [{ userId, content: reply, replyingTo: commentedTo, user: mainData }],
            };
          }
          return comment;
        });
        return { ...item, comments: updatedComments };
      }
      return item;
    });
    setProductData(updatedProductData);
  };

  // Function to delete a comment
  const deleteComment = (commentId) => {
    const updateProductData = productData.map(item => {
      if (item.comments) {
        const filteredComments = item.comments.filter(comment => comment?.id !== commentId);
        return { ...item, comments: filteredComments };
      }
      return item;
    });
    setProductData(updateProductData);
  };

  // Function to delete a reply
  const deleteReplay = (commentId, replyId) => {
    const updatedProductData = productData.map(item => {
      if (item.comments) {
        const updatedComments = item.comments.map(comment => {
          if (comment.id === commentId && comment.replies) {
            const updatedReplies = comment.replies.filter(reply => reply?.userId !== replyId);
            return { ...comment, replies: updatedReplies };
          }
          return comment;
        });
        return { ...item, comments: updatedComments };
      }
      return item;
    });
    setProductData(updatedProductData);
  };

  // Function to get feedbacks by status
  const getFeedbacksByName = (name) => {
    return productData.filter(product => product.status === name);
  };

  // Function to filter products by category
  const filteredProductsByCategory = (category) => {
    if (category === "All") {
      setMainCategory(productData);
    } else {
      setMainCategory(productData.filter(product => product.category === category));
    }
  };

  // Function to filter products by comments and upvotes
  const filteredProductsByCommentsAndUpvotes = (type) => {
    let sortedProductRequests = [...mainCategory];
    switch (type) {
      case "mostComments":
        sortedProductRequests.sort((a, b) => {
          const numCommentsA = countTotalComments(a);
          const numCommentsB = countTotalComments(b);
          return numCommentsB - numCommentsA;
        });
        break;
      case "leastComments":
        sortedProductRequests.sort((a, b) => {
          const numCommentsA = countTotalComments(a);
          const numCommentsB = countTotalComments(b);
          return numCommentsA - numCommentsB;
        });
        break;
      case "mostUpvotes":
        sortedProductRequests.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
        break;
      case "leastUpvotes":
        sortedProductRequests.sort((a, b) => (a.upvotes || 0) - (b.upvotes || 0));
        break;
      default:
        break;
    }
    setMainCategory(sortedProductRequests);
  };
  const countTotalComments = (product) => {
    let totalComments = product.comments ? product.comments.length : 0;
    if (product.comments) {
      product.comments.forEach(comment => {
        totalComments += comment.replies ? comment.replies.length : 0;
      });
    }
    return totalComments;
  };

  // Categories and statuses for filtering
  const categories = ["All","UI", "UX", "enhancement", "bug", "feature"];
  const statuses = ["suggestion", "live", "planned", "in-progress"];

  return (
    <FeedbackContext.Provider value={{
      productData,
      setProduct,
      editProductData,
      setComment,
      changeUpVotes,
      setReplies,
      removeProduct,
      getFeedbacksByName,
      mainData,
      deleteReplay,
      deleteComment,
      filteredProductsByCategory,
      filteredProductsByCommentsAndUpvotes,
      mainCategory,
      categories,
      statuses,
      setProductData,
    }}>
      {children}
    </FeedbackContext.Provider>
  );
}