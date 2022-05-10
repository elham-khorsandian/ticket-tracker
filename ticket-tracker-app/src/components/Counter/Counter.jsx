import React, { useState } from "react";
import "./Counter.scss";


const Counter = (props) => {
  const { defaultCount } = props;
  const [count, setCount] = useState(defaultCount);

const handleDecrement = () => {
  if (count > 0) setCount(count-1);
}

const handleIncrement = () => {
  setCount(count+1);
}

  return (
    <div className="firstClass">
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
