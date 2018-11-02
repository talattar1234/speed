export const getModalVisibility = (state) => {
    return state.modal.isModalVisible;
}

export const getModalType = (state) => {
    return state.modal.type;
}

export const getModalPropsPayload = (state) => {
    return state.modal.propsPayload;
}