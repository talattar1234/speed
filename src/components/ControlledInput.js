
import React from 'react';

class ControlledInput extends React.Component {
    state = {
        text: ""
    }

    hanleTextChanged = (e) => {
        const newTextValue = e.target.value;
        this.setState(()=>({
            text: newTextValue
        }));
    }

    render(){
        return (
            <div>
                <input onChange={this.hanleTextChanged} type="text" value={this.state.text}></input>
            </div>
        )
    }
}

export default ControlledInput;