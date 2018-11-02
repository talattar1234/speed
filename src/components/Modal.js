import React from 'react';
import { connect } from 'react-redux';
import { getModalVisibility, getModalType,getModalPropsPayload } from '../selectors/modalSelector';
import {default as ModalReact} from 'react-modal';

ModalReact.setAppElement('body');

class Modal extends React.Component {

    render(){
        return (
        <div>
            <ModalReact
                isOpen={this.props._isModalOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                /*style={customStyles}*/
                contentLabel="Example Modal"
            >
            {this.props._modalType}
            </ModalReact>

        </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...getModalPropsPayload,
      _isModalOpen: getModalVisibility(state),
      _modalType: getModalType(state)
    };
  };
export default connect(mapStateToProps)(Modal);
  