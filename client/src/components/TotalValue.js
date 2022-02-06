import React from "react";
import "../App.css";

const TotalValue = ({ shares, chartType }) => {
  const handleGetGraph = () => {
    chartType("Total");
  };
  const noOfShare = shares.map((s) => s.noOfShares);
  const currentPrice = shares.map((s) => s.currentPrice);
  const totalValue = noOfShare.reduce(function (r, a, i) {
    return r + a * currentPrice[i];
  }, 0);
  return (
    <div className="total-value-cont">
      <h1 id="total_value" onClick={handleGetGraph}>
        Total: £{totalValue.toLocaleString()}
      </h1>
    </div>
  );
};

export default TotalValue;
