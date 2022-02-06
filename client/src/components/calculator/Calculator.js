import React, { useState } from 'react';
import CalculatorForm from './CalculatorForm'

const Calculator = () => {

    const [rate, setRate] = useState("")

    const [growth, setGrowth] = useState("")




    

  return (
      <>
      <CalculatorForm updateRate={value => setRate(value)} updateGrowth={value => setGrowth(value)} rate={rate} growth={growth} />
      </>
  );
};

export default Calculator;
