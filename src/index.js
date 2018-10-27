import React from "react";
import ReactDOM from "react-dom";
import './style.scss';

const Index = () => {
  return <div>Hello React!

    <Counter/>
      
  </div>; 
};

class Counter extends React.Component {

    state = {
        count: 0
    }

    addToCounter = () => {
        this.setState((prevState)=>({
            count: prevState.count + 1,
            myDescription: ""
        }))
    }
    decFromCounter = () => {
        this.setState((prevState)=>({
            count: prevState.count -1
        }))
    }
    resetCounter = () => {
        this.setState(()=>({
            count: 0
        }))
    }
    onInputChange = (e) => {

        const newDescription = e.target.value;
        this.setState(()=>({
            myDescription: newDescription
        }));
    }
    render(){
        return (
            <div>
                <button onClick={this.addToCounter}> +1 </button>
                <button onClick={this.decFromCounter}> -1 </button>
                <button onClick={this.resetCounter}> reset </button>
                <input type="text" onChange={this.onInputChange} value={this.state.myDescription}/>
                <div>{this.state.count}</div>
            
            </div>
        )
    }
    
}


ReactDOM.render(<Index />, document.getElementById("indexReact"));