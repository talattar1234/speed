// SET_MODAL_VISIBILITY
export const setModalOptions = ({visibility = 'false', type, propsPayload, reactModalProps} = {}) => ({
    type: 'SET_MODAL_OPTIONS',
    modalOptions:{
      type,
      visibility,
      propsPayload,
      reactModalProps
    }
    
    
  });
  
  