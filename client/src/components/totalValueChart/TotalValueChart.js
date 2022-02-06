import React, {useEffect, useState} from 'react';
import TotalValueChartDesign from './TotalValueChartDesign';
import './TotalValueChartDesign.css'


const TotalValueChart = () => {
    const [totalShareData, setTotalShareData] = useState([])
    const [loading, setLoading] = useState(true)

    const getTotalShareData = async (symbol) => {
        setLoading(true)

        const convertDataForChart = (inputData) => {
            let sharesDataArr = []
                  for (let key in inputData) {
              
                    if (inputData.hasOwnProperty(key)) {
                        let prices = Object.values(inputData[key])
                        prices = prices.map(Number)
                        sharesDataArr.push([parseInt((new Date(key).getTime()).toFixed(0))].concat(prices))
                    }                 
                  }
          return sharesDataArr.reverse()
        }

        const sharesApiURL = `http://localhost:5000/api/sharesData/find/${symbol}`
        return fetch(sharesApiURL)
        .then(res => res.json())
        .then((data) => 
            convertDataForChart(data["data"]), setLoading(false))
        .catch(err=>console.log(err))  
    }    
    useEffect(() => {
        getTotalShareData("TotalValue").then((result) => setTotalShareData(result))}
        , []);

    const chartFunc = () => {
            if (loading) {
                return <h2>Page is still loading, please wait</h2>
            }
            return <div id="total_value_chart"> <TotalValueChartDesign totalShareData={totalShareData}/></div>
            }


  return <>
  {chartFunc()}
  </>
  
};

export default TotalValueChart;
