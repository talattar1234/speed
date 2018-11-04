import React from 'react';
import { connect } from 'react-redux';
import { getModalVisibility, getModalType, getModalPropsPayload } from '../selectors/modalSelector';
import {default as ModalReact} from 'react-modal';
import {getModalComponentByType} from '../logics/modalLogic';

ModalReact.setAppElement('body');

class Modal extends React.Component {
   
    
    render(){
        const ModalTemplate = getModalComponentByType(this.props._modalType);
        return (
        <div>
            <ModalReact
                isOpen={this.props._isModalOpen}
                /*onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"*/
            >

            {ModalTemplate && <ModalTemplate {...this.props._modalPropsPayload}/>}
            
            </ModalReact>

        </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...getModalPropsPayload,
      _isModalOpen: getModalVisibility(state),
      _modalType: getModalType(state),
      _modalPropsPayload: getModalPropsPayload(state)
    };
  };
export default connect(mapStateToProps)(Modal);
  