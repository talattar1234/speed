import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import ImageTest from "./components/ImageTest"
import "normalize.css/normalize.css";
import './styles/styles.scss';

const Index = () => {
  return <div>Hello React!

    <Counter/>
      <ControlledInput/>
      <ImageTest src="images/minion.jpg"/>
  </div>; 
};




ReactDOM.render(<Index />, document.getElementById("indexReact"));