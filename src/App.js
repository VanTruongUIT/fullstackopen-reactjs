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
  const [allFeedBack, setAllFeedBack] = useState(0);

  const sumFeedBack = () => {
    return good + neutral + bad;
  }

  const handleSetGoodClick = () => { 
    setGood(good + 1);
    console.log('call set All FeedBack');
    setAllFeedBack(sumFeedBack());

  }
  const handleSetNeutralClick = () => { 
    setNeutral(neutral + 1);
    setAllFeedBack(sumFeedBack());
  }
  const handleSetBadClick = () => { 
    setBad(bad + 1);
    setAllFeedBack(sumFeedBack());
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
        All {allFeedBack}
      </div>
    </div>
  );
};

export default App;
