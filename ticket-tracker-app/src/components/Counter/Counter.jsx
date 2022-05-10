import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  /*  const { employee } = props; */
  const [count, setCount] = useState(0);

  return (
    <div className="firstClass">
      {/* <p>{employee.count}</p> */}
      <p>{count}</p>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Counter;
