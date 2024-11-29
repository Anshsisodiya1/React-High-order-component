import React from "react";
import "./App.css";
import ClickCounter from "./HOC/ClickCounter";
import HoverComponent from "./HOC/HoverComponent";

function App() {
  return (
    <>
      <div className="appd">
        <h1>Higher Order Component</h1>
        <p>
        A Higher-Order Component (HOC) is a pattern in React where a function takes an existing component and returns a new component with added features or enhanced behavior. It acts as a wrapper to extend the functionality of the base component.
        </p>
        <p>In this example, when you click the button, the counter value increases by one. Similarly, when you hover over another element, the counter for that action also increments. Both behaviors are implemented using a single reusable Higher-Order Component, making the code cleaner and more modular.. </p>
      </div>
      <ClickCounter />
      <HoverComponent />
    </>
  );
}

export default App;