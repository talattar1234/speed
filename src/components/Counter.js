import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
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

    render(){
        return (
            <div>
                <button onClick={this.addToCounter} className="counter-btn"> +1 </button>
                <button onClick={this.decFromCounter} className="counter-btn"> -1 </button>
                <button onClick={this.resetCounter}> reset </button>
                <div>{this.state.count}</div>
            </div>
        )
    }    
}

export default Counter;