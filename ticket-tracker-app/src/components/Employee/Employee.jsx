import React from "react";
import Counter from "../Counter/Counter";
import "./Employee.scss";

const Employee = (props) => {
  const { employeesArr } = props;

  const listEmployeesJSX = employeesArr.map((employee) => (
    <div className="employeeCard">
      <p>{employee.name}</p>
      <p>{employee.role}</p>
      <Counter defaultCount={employee.count} />
    </div>
  ));

  return (
    <>
      <div className="secondClass">{listEmployeesJSX}</div>
    </>
  );
};

export default Employee;
