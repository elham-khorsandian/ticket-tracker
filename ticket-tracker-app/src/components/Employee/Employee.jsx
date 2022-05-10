import React from "react";
import "./Employee.scss";

const Employee = (props) => {
  const { employeesArr } = props;

  const listEmployeesJSX = employeesArr.map((employee) => (
    <div className="employeeCard">
      <p>{employee.name}</p>
      <p>{employee.role}</p>
    </div>
  ));

  return (
    <>
      <div className="secondClass">{listEmployeesJSX}</div>
    </>
  );
};

export default Employee;
