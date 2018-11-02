// SET_MODAL_VISIBILITY
export const setModalOptions = ({modalVisibility = 'false',modalType,modalPropsPayload } = {}) => ({
  type: 'SET_MODAL_OPTIONS',
  modalOptions:{
    modalType,
    modalVisibility,
    modalPropsPayload
  }
  
  
});

