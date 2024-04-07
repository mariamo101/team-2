/* eslint-disable */
import React from "react";
import FeedbackContainer from "./FeedbackContainer";
const RoadMapFilter = ({ feedback }) => {
  return (
    <div className="p-0">
      <div className="mt-9">
        <FeedbackContainer {...feedback} isRoadMap={true}/>
      </div>
    </div>
  );
};

export default RoadMapFilter;
