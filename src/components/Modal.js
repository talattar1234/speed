import React from 'react';
import { connect } from 'react-redux';
import { getModalVisibility, getModalType, getModalPropsPayload, getReactModalProps } from '../selectors/modalSelector';
import {default as ReactModal} from 'react-modal';
import {getModalComponentByType} from '../logics/modalLogic';

ReactModal.setAppElement('body');

class Modal extends React.Component {
   
    
    render(){
        const ModalTemplate = getModalComponentByType(this.props._modalType);
        return (
        <div>
            <ReactModal
                isOpen={this.props._isModalOpen}
                {...this.props._propsReactModal}
                closeTimeoutMS = {200}
                /*onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"*/
            >

            {ModalTemplate && <ModalTemplate {...this.props._modalPropsPayload}/>}
            
            </ReactModal>

        </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...getModalPropsPayload,
      _isModalOpen: getModalVisibility(state),
      _modalType: getModalType(state),
      _propsReactModal: getReactModalProps(state),
      _modalPropsPayload: getModalPropsPayload(state)
    };
  };
export default connect(mapStateToProps)(Modal);
  