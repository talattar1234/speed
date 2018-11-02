import React from 'react';
import {_closeModal} from "../logics/todosLogic";

class TodoModal extends React.Component{
    closeModal = () => {
        _closeModal();
        //this.props.propsPayload.onRequestClose();
    }
    
    render(){
        return (<div>
            {this.props.id}
            <button onClick={this.closeModal}>close</button>
        </div>)
    }
}

export default TodoModal;