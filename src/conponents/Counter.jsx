import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1 className="count">{count}</h1>
      <button className="btn-count" onClick={increment}>
        increment
      </button>
      <button className="btn-count" onClick={decrement}>
        decrement
      </button>
    </div>
  );
};

export default Counter;
