import React from 'react'
import { useState } from 'react';

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const handleClickPlusCounter = () => {
    console.log("Plus!!!");
    setCounter(counter + 1);
  };

  const handleClickMinusCounter = () => {
    console.log("Plus!!!");
    setCounter(counter - 1);
  };

  const handleClickResetCounter = () => {
    console.log("Reset to 0");
    setCounter(0);
  };


  
  return (
    <div>
      <Display counter={counter}/>
      <Button 
        onClick={handleClickPlusCounter}
        text="Plus"
      />
      <Button 
        onClick={handleClickMinusCounter}
        text="Minus"
      />
      <Button 
        onClick={handleClickResetCounter}
        text="Reset to zero"
      />

    </div>
  );
};

export default App;
