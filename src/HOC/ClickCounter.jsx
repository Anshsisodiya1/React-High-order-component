
import React from "react";
import UpdatedComp from "./UpdatedComp";
import '../App.css'

const ClickCounter = ({ count, incrementCount }) => {
  console.log(incrementCount);
  return <button onClick={incrementCount}> Count {count} Times </button>;
};

export default UpdatedComp(ClickCounter);
