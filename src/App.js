import React from 'react'
import { useState } from 'react';


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const StatisticLine = (props) => { 
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  ); 
};

const Statistic = (props) => { 
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="Good" value={props.data.good}/>
        <StatisticLine text="Neutral" value={props.data.neutral}/>
        <StatisticLine text="Bad" value={props.data.bad}/>
        <StatisticLine text="All" value={props.data.numberOfFeedBacks}/>
        <StatisticLine text="Average" value={props.data.average}/>
        <StatisticLine text="Positive" value={props.data.positive + " %"} />
      </tbody>
    </table>
  );
};

const App = () => {

  // save clicks of each button its own state
  const [data, setData] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0,
      numberOfFeedBacks: 0,
      totalPoint: 0,
      average: 0,
      positive: 0,
    }
  )

  const handleSetGoodClick = () => { 
    const newGood = data.good + 1;
    const newTotalPoint = data.totalPoint + 1;
    const newNumberOfFeedBacks = data.numberOfFeedBacks + 1;

    const newData = {
      ...data,
      good: newGood,
      totalPoint: newTotalPoint,
      numberOfFeedBacks: newNumberOfFeedBacks,
      average: (newGood - data.bad) / newNumberOfFeedBacks,
      positive: newGood / newNumberOfFeedBacks,
    };

    setData(newData);
  }
  const handleSetNeutralClick = () => {

    const newNeutral = data.neutral + 1;
    const newTotalPoint = data.totalPoint + 1;
    const newNumberOfFeedBacks = data.numberOfFeedBacks + 1;

    const newData = {
      ...data,
      neutral: newNeutral,
      totalPoint: newTotalPoint,
      numberOfFeedBacks: newNumberOfFeedBacks,
    };

    setData(newData);
  }
  const handleSetBadClick = () => { 
    const newBad = data.bad + 1;
    const newTotalPoint = data.totalPoint - 1;
    const newNumberOfFeedBacks = data.numberOfFeedBacks + 1;

    const newData = {
      ...data,
      bad: newBad,
      totalPoint: newTotalPoint,
      numberOfFeedBacks: newNumberOfFeedBacks,
      average: (data.good - newBad) / newNumberOfFeedBacks,
      positive: data.good / newNumberOfFeedBacks,
    };

    setData(newData);
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
      {data.numberOfFeedBacks !== 0 && 
        <Statistic data={data}/>
      }

      {data.numberOfFeedBacks === 0 && 
        <p>No feedback given!</p>
      }

    </div>
  );
};

export default App;
