# Feedback

Hey Charlie here, feel free to message me on Slack if you want any clarification on the points below. I will give you both positive and constructive feedback on your project.

---

## Requirements

- Should be built in React - DONE
- Each component should mange is own state - DONE
- The components should be generated using `.map()` - ALMOST DONE _(see notes below)_
- At least an employee component - DONE
- Pass data via props - ALMOST DONE _(see notes below)_
- Don't leave it blank - DONE _(for desktop ;))_

---

## The App

### Positive

- The app looks great on a large desktop.
- I am able to increment each employee's tickets, Great!
- The counter will not go below 0, Nice!
- The color pallette is great, it reminds me of [Happy hues](https://www.happyhues.co/) a great resource if you need positive colors quickly.
  - It is great that you have a `_variable.scss` file for them

### Constructive

- You need to work on the smaller device styles, it is responsive to a certain degree.
  - When it goes below a certain width the tickets get squished which you will need to resolve.
- Add a little spiel to the read me to introduce the project, it doesn't have to be much.
  - What was the brief?
  - Who worked on it?
  - Once we have it hosted, a link to the live site

---

## The Code

### Positive

- I can see both commits from both of you, it is great you worked on it collaboratively.

- The code looks good, in terms of what we have learned you have managed to apply all of it.

  - You have created components. Nice!
  - You have imported the data and are using props to give it to the components that need it!
  - You are mapping over the data. Sweet!
  - You have introduced State. Awesome!

- The `<Counter/>` component makes sense to be its own component, that manages its own state.
  - I like the addition of the default state that you added to the data with .map() and then passed to the component to use.
  - When you do map over the data to add the extra key try making it random instead of setting it to 0. It will take 10 mins [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Constructive

- Make `App.css` as `.scss` file.
- You will need to take everything that is inside the `ticket-tracker-app` folder and move it out of it and then you can delete that folder. When you are hosting you need it all to be in the root folder.
- You need to go through and delete the `.css & .css.map` files, you added sass so do not need them.
- When you do `.map()` you are not giving each item a key prop. If you open the console you will the error below. Once you add the key prop it will go.

```
react-jsx-dev-runtime.development.js:97 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Employee`. See https://reactjs.org/link/warning-keys for more information.
    at div
    at Employee (http://localhost:3000/static/js/bundle.js:257:5)
    at div
    at div
    at App
```

- I think your `<Employee>` component is misleading, it sounds as if it is one thing when it contains a list of employees. Based on the code I think your `<Employee>` should be something like below

```jsx
const Employee = props => {
  const { name, role, count } = props;

  return (
    <div className="employeeCard">
      <p>{name}</p>
      <p>{role}</p>
      <Counter defaultCount={count} />
    </div>
  );
};
```

- Then you could create a `<EmployeeList>` that takes the array and creates the employees, or you could do it in the App it is your choice.

```jsx
const listEmployeesJSX = employeesArr.map((employee) => (
  <Employee key={"employee" + employee.id} name={employee.name} role={employee.role} count={employee.count} />
));
```

- Why? This would make `<Employee>` reusable, generally components want to be as reusable as possible.

- I am a big fan of `B.E.M` especially when it comes to React. You do not have to use it but you have to be aware that you do not want styles from one component to apply to others.
- At the moment the styles you have in your `<Counter>` will apply to any button you have in your project because you are using the button selector. Give it a go create a `<button>` in the App and see the styles.

- With `B.E.M` it could look like below.

```jsx
// Counter.jsx
return (
  <div className="counter">
    <p>{count}</p>
    <div>
      <button className="counter__button" onClick={handleDecrement}>
        -
      </button>
      <button className="counter__button" onClick={handleIncrement}>
        +
      </button>
    </div>
  </div>
);
```

```scss
// Counter.scss
@use "../../assets/sass/_variables.scss" as *;

.counter {
  background-color: $color-light-purple;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2vh;
  border-radius: 7%;

  &__button {
    margin: 0 1vh;
    border-radius: 20%;
    padding: 1vh 2vh;
    border: none;
    background-color: $color-white;
    font-size: 1.3em;
  }
}
```

---
