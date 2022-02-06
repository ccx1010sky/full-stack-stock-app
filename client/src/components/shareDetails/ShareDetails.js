import React from "react";
import getApiKey from "../../key";

//below are import needed for the chart
import ChartDesign from "../ChartDesign";

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
