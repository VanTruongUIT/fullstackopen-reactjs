import React from 'react';

const Total = (props) => {
  const total = props.parts.reduce((current, previous) => current + previous.exercises, 0);
  return (
    <h3>Total of {total} exercises</h3>
  );
};

export default Total;