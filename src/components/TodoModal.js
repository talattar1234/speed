import React from 'react';

class TodoModal extends React.Component{
    closeModal = () => {
        //this.props.propsPayload.onRequestClose();
    }
redner(){

    return (<div>
        {this.props.id}
        <button onClick={this.closeModal}>close</button>
    </div>)
}

}