// Expenses Reducer
const modalReducerDefaultState = {
  isModalVisible: false,
  modalType: '',
  modalPropsPayload: {}
};

export default (state = modalReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MODAL_OPTIONS':
      return {
       ...state,
        isModalVisible: action.modalOptions.modalVisibility !== undefined  ? action.modalOptions.modalVisibility : state.isModalVisible,
        modalType: action.modalOptions.modalType !== undefined  ? action.modalOptions.modalType : state.modalType,
        modalPropsPayload: action.modalOptions.modalPropsPayload !== undefined  ? action.modalOptions.modalPropsPayload : state.modalPropsPayload

      }
/*
    case 'SET_MODAL_VISIBILITY':
      return {
        ...state,
        isModalVisible: action.modalOptions.modalVisibility
      };
    case 'SET_MODAL_TYPE':
      return {
        ...state,
        modalType: action.modalOptions.modalType
      }
    case 'SET_MODAL_PROPS_PAYLPAD':
      return {
        ...state,
        modalPropsPayload: action.modalOptions.modalType
      }
    */
    default:
      return state;
  }
};
