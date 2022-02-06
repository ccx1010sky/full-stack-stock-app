import React from "react";
import ShareCard from "./ShareCard";

const SharesGrid = ({
  removeShareFromDB,
  shares,
  updateShareNo,
  getGraph,
  chartType,
}) => {
  const sharesList = shares.map((share) => {
    return (
      <ShareCard
        chartType={chartType}
        share={share}
        key={share._id}
        getGraph={getGraph}
        removeShareFromDB={removeShareFromDB}
        updateShareNo={updateShareNo}
      />
    );
  });

  return <div className="shares-grid">{sharesList}</div>;
};

export default SharesGrid;
