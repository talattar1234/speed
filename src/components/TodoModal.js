import React from 'react';
import {_closeModal as _closeModalLogic } from "../logics/todosLogic";
import ENUM from '../enum';



class TodoModal extends React.Component{

    state = {
        description: this.props.description
    }

    _closeModal = (action) => {
        const payload = {
            description: this.state.description,
            id: this.props.id
        }
       const res =  _closeModalLogic({action,payload});
    }
    handleButtonAdd = () => {
        
        this._closeModal(ENUM.ModalAction.ADD);
    }
    handleButtonUpdate = () => {
        this._closeModal(ENUM.ModalAction.UPDATE);
    }
    handleButtonCancel = () => {
        this._closeModal(ENUM.ModalAction.CANCEL);
    }

    onDescriptionChange = (e) => {
        const newDescription = e.target.value;
        this.setState(()=> ({
            description: newDescription
        }))
    }

    renderRoleButton(role){
        switch(role){
            case ENUM.ModalRole.ADD:
                return (<button onClick={this.handleButtonAdd}>Add</button>)
            case ENUM.ModalRole.EDIT:
                return (<button onClick={this.handleButtonUpdate}>Save</button>)
            default:
                return (<div></div>)
        }
    }
    render(){

        return (
        <div>
            <input
        
                value={this.state.description || ""}
                onChange = {this.onDescriptionChange}
                ></input>
            {
            
                this.renderRoleButton(this.props.modalRole)
                  
            }
            
            <button onClick={this.handleButtonCancel}>Cancel</button>
        </div>
    )}
}



export default TodoModal;