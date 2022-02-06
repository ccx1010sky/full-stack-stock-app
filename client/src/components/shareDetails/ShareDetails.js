import React from "react";
import ChartDesign from "./ChartDesign";

const ShareDetails = ({ selectedShare, shareData, chartHeadline }) => {
  return (
    <>
      <div>
        <br />
        <ChartDesign selectedShare={chartHeadline} shareData={shareData} />
      </div>
    </>
  );
};

export default ShareDetails;
