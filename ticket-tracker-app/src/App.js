import "./App.css";
import Employee from "./components/Employee/Employee";
import Counter from "./components/Counter/Counter";
import team from "./data/team";

const App = () => {
  return (
    <>
      <div className="homePage">
        <h2>Ticket Tracker</h2>
        <div className="mainArea">
          <Employee employeesArr={team} />
        </div>
      </div>
    </>
  );
};

export default App;
