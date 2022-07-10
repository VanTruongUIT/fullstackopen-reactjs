import { useState } from 'react';

import React from 'react'


// rafce
const App = () => {
  const anecodotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
  const lengthAnecdote = anecodotes.length;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(lengthAnecdote).fill(0));

  const handleOnClick = () => { 
    const index = Math.floor(Math.random() * (0, lengthAnecdote));
    setSelected(index);
    
  };
  const handleOnClickVote = () => {
    const index = anecodotes.indexOf(anecodotes[selected])
    const newVotes = [...votes, ]
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <div>{anecodotes[selected]}</div>
      <button onClick={handleOnClickVote}>Vote</button>
      <button onClick={handleOnClick}>Next anecodote</button>
      
      <h3>Anecdote with most votes</h3>
      <p>{anecodotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>Total votes: {votes[selected]}</p>
    </div>
  )
}

export default App;