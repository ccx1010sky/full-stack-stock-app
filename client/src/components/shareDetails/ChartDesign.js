import React from "react";
import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const ChartDesign = ({ selectedShare, shareData }) => {
  const arr = [];
  for (var i = 0; i < shareData.length; i++) {
    arr.push([
      shareData[i][0], // the date
      shareData[i][1], // open
      shareData[i][2], // high
      shareData[i][3], // low
      shareData[i][4], // close
    ]);
  }

  let mockOptions = {
    chart: {
      styledMode: true,
    },
    rangeSelector: {
      buttons: [
        {
          type: "month",
          count: 1,
          text: "1m",
          title: "View 1 month",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
          title: "View 3 months",
        },
        {
          type: "month",
          count: 6,
          text: "6m",
          title: "View 6 months",
        },
        {
          type: "ytd",
          text: "YTD",
          title: "View year to date",
        },
        {
          type: "year",
          count: 1,
          text: "1y",
          title: "View 1 year",
        },
        {
          type: "all",
          text: "All",
          title: "View all",
        },
      ],
      selected: 5,
    },

    title: {
      text: selectedShare,
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "Price",
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "Volume",
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2,
      },
    ],

    tooltip: {
      split: true,
    },

    series: [
      {
        type: "candlestick",
        data: (function () {})(),
      },
      {
        type: "column",
        data: arr,
        yAxis: 1,
      },
    ],
  };

  return (
    <div>
      {
        <HighchartsReact
          highcharts={HighStock}
          constructorType={"stockChart"}
          options={mockOptions}
        />
      }
    </div>
  );
};

export default ChartDesign;
