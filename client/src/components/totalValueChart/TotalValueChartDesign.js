import React from "react";
import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import chartData from "./ChartData";

const TotalValueChartDesign = ({totalShareData}) => {

const mockData = totalShareData
let mockOptions = {
  chart: {
    styledMode: true
},
  rangeSelector: 
  
   {buttons: [{
    type: 'month',
    count: 1,
    text: '1m',
    title: 'View 1 month'
}, {
    type: 'month',
    count: 3,
    text: '3m',
    title: 'View 3 months'
}, {
    type: 'month',
    count: 6,
    text: '6m',
    title: 'View 6 months'
}, {
    type: 'ytd',
    text: 'YTD',
    title: 'View year to date'
}, {
    type: 'year',
    count: 1,
    text: '1y',
    title: 'View 1 year'
}, {
    type: 'all',
    text: 'All',
    title: 'View all'
}], 
    selected: 5
  },
  title: {
    text: "Total value of the fund"
  },
  navigator: {
    enabled:false
  },
  scrollbar: {
    enabled: false
  },

  yAxis: [
    {
      labels: {
        align: "right",
        x: -3
      },
      title: {
        text: "Price"
      },
      height: "100%",
      lineWidth: 2,
      resize: {
        enabled: true
      }
    },
    
    // {
    //   labels: {
    //     align: "right",
    //     x: -3
    //   },
    //   title: {
    //     text: "Volume"
    //   },
    //   top: "65%",
    //   height: "35%",
    //   offset: 0,
    //   lineWidth: 2
    // }
  ],

  tooltip: {
    split: true
  },

  series: [
    {
      type: "line",
      data: (function() {
        var ohlcData = [];

        for (var i = 0; i < mockData.length; i++) {
          ohlcData.push([
            mockData[i][0], // the date
            // mockData[i][1]*10, // open
            // mockData[i][2]*10, // high
            // mockData[i][3]*10, // low
            Math.floor(Number(mockData[i][4]))*100 // close
          ]);
        }
        return ohlcData;
      })()
    },
    // {
    //   type: "line",
    //   data: (function() {
    //     var columnData = [];

    //     for (var i = 0; i < mockData.length; i++) {
    //       columnData.push([
    //         mockData[i][0], // the date
    //         mockData[i][5] // the volume
    //       ]);
    //     }
    //     return columnData;
    //   })(),
    //   yAxis: 1
    // }
  ]
};

  return (
    <div className="App">
      {
        <HighchartsReact
          highcharts={HighStock}
          constructorType={"stockChart"}
          options={mockOptions}
        />
      }
    </div>
  );
}

export default TotalValueChartDesign