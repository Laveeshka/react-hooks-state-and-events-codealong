import React from "react";
import { useState } from "react"; //importe the useState hook

//when the button is ON, make the background red. Otherwise, make it white

function Toggle() {
  //remember to use state within the component function only. D'accord?
  //set up initial state
  const [isOn, setIsOn] = useState(false) //the initial value of the isOn state variable is false

  //handleClick callback function
  function handleClick(){
    setIsOn((isOn) => !isOn); //call the setter function. Rule of thumb is to use a callback function inside the setter function to update the state variable
  }

  //conditional assignment
  const bgColor = isOn? "red" : "white";

  return <button style={{ background: bgColor}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>; //use conditional rendering to determine button's text based on state variable
}

export default Toggle;
