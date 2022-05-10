import React from "react";
import "./Counter.css";

const Counter = (props) => {
  const { employee } = props;
  return (
    <div className="firstClass">
      <p>{employee.count}</p>
    </div>
  );
};

export default Counter;
