import React from 'react'
import { useState } from 'react';


const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const StatisticLine = ({text, value}) => { 
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistic = ({good, neutral, bad, total}) => {
  if (total === 0){
    return (
      <div>No feedback given!</div>
    );
  }
  const calculateAverage = () => (good - bad) / total;
  const calculatePositive = () => (good / total * 100) + " %";

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={calculateAverage()} />
          <StatisticLine text="positive" value={calculatePositive()} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {

  // save clicks of each button its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSetGoodClick = () => { 
    setGood(good + 1);
    setTotal(total + 1);

  }

  const handleSetNeutralClick = () => { 
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }

  const handleSetBadClick = () => { 
    setBad(bad + 1);
    setTotal(total + 1);
  }

  return (
    <div>
      <h3>Give feedback</h3>
      <Button 
        onClick={handleSetGoodClick}
        text="Good"
      />
      <Button 
        onClick={handleSetNeutralClick}
        text="Neutral"
      />
      <Button 
        onClick={handleSetBadClick}
        text="Bad"
      />

      <h3>Statistics</h3>
      <Statistic 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      />

    </div>
  );
};

export default App;
