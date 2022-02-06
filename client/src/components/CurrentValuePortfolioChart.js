import React from "react";
import "../App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ShareDetails from "./ShareDetails";
import TotalValueChart from "./totalValueChart/TotalValueChart";
import "./totalValueChart/TotalValueChartDesign.css";

const CurrentValuePortfolioChart = ({ shares }) => {
  const shareName = shares.map((s) => s.name);
  const noOfShare = shares.map((s) => s.noOfShares);
  const currentPrice = shares.map((s) => s.currentPrice);

  const totalValue = noOfShare.reduce(function (r, a, i) {
    return r + a * currentPrice[i];
  }, 0);
  const percent = shares.map(
    (s) => (s.noOfShares * s.currentPrice * 100) / totalValue
  );

  const arr = [];
  for (let i = 0; i < shares.length; i++) {
    arr.push({ name: shareName[i], y: percent[i] });
  }

  //options object
  const options = {
    chart: {
      type: "pie",
      styledMode: true,
    },
    title: {
      text: "Portfolio Allocations",
    },
    subtitle: {
      // text: 'Click the columns to view versions. Source: <a href="http://highcharts.com" target="_blank">Highcharts.com</a>',
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total percent share",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        pointPadding: 0.4,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },

    tooltip: {
      // headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      // pointFormat:
      //   '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total value<br/>',
    },
    // option.series[0].data[x].name
    // option.series[0].data[x].y
    series: [
      {
        name: "Shares",
        colorByPoint: true,
        data: arr,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CurrentValuePortfolioChart;
