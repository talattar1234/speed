// Expenses Reducer
const modalReducerDefaultState = {
  isModalVisible: false,
  type: '',
  role: '',
  propsPayload: {},
  reactModalProps: {}
};

export default (state = modalReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MODAL_OPTIONS':
      const newIsModaleVisible = action.modalOptions.visibility;
      const newType = action.modalOptions.type;
      const newPropsPayload = action.modalOptions.propsPayload;
      const newReactModalProps = action.modalOptions.propsPayload;
      return {
       ...state,
        isModalVisible: newIsModaleVisible !== undefined  ? newIsModaleVisible : state.isModalVisible,
        type: newType !== undefined  ? newType : state.type,
        propsPayload: newPropsPayload !== undefined ? newPropsPayload : state.propsPayload,
        reactModalProps: newReactModalProps !== undefined ? newReactModalProps : state.reactModalProps
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
