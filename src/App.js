import React from 'react'
import { useState } from 'react';


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
};



const App = () => {

  // save clicks of each button its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [numberOfFeedBacks, setNumberOfFeedBacks] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const calculateAverage = () => {
    console.log('totalpoint', totalPoint);
    console.log('numberOfFeedBacks', numberOfFeedBacks);
    let average = totalPoint / numberOfFeedBacks;
    console.log('average', average);
    return average;
  };

  const calculatePositive = () => { 
    return (good + neutral) / numberOfFeedBacks;
  };

  const handleSetGoodClick = () => { 
    setGood(good + 1);
    console.log('good', good);

    setTotalPoint(totalPoint + 1);
    console.log('totalPoint', totalPoint);

    setNumberOfFeedBacks(numberOfFeedBacks + 1);
    console.log('numberOfFeedBacks', numberOfFeedBacks);
    console.log('average', (good - bad) / numberOfFeedBacks);
    setAverage((good - bad) / numberOfFeedBacks);
    setPositive(calculatePositive());

  }
  const handleSetNeutralClick = () => { 
    setNeutral(neutral + 1);
    setNumberOfFeedBacks(numberOfFeedBacks + 1);
    setAverage(calculateAverage());
    setPositive(calculatePositive());

  }
  const handleSetBadClick = () => { 
    setBad(bad + 1);
    setTotalPoint(totalPoint - 1);
    setNumberOfFeedBacks(numberOfFeedBacks + 1);
    setAverage(calculateAverage());
    setPositive(calculatePositive());

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
      <div>
        Good {good}
      </div>
      <div>
        Neutral {neutral}
      </div>
      <div>
        Bad {bad}
      </div>
      <div>
        All {numberOfFeedBacks}
      </div>
      <div>
        Average {average}
      </div>
      <div>
        Positive {positive}
      </div>

    </div>
  );
};

export default App;
