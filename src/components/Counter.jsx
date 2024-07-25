import React, { useState } from 'react';

const Counter = ({ start = 0, step = 1 }) => {
  const [count, setCount] = useState(start);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  return (
    <div className="component-container">
      <button onClick={decrement}>Decrement</button>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
