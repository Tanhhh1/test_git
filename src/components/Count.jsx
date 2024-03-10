import React, { useState } from 'react';

const CounterComponent = () => {
  const [counter, count] = useState(0);

  const incrementCounter = () => {
    count(counter + 1);
  };

  const decrementCounter = () => {
    count(counter - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-value">Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increase</button>
      <button onClick={decrementCounter}>Decrease</button>
    </div>
  );
};

export default CounterComponent;
