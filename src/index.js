import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Components/Counter"
import ControlledInput from "./Components/ControlledInput"
import "normalize.css/normalize.css";
import './styles/styles.scss';

const Index = () => {
  return <div>Hello React!

    <Counter/>
      <ControlledInput/>
  </div>; 
};




ReactDOM.render(<Index />, document.getElementById("indexReact"));