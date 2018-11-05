import {store} from '../index';

let typeToModalComponent = {}

import {setModalOptions as setModalOptionsAction} from "../actions/modalAction"


export const registerComponentsPerType = (type,component) => {
    typeToModalComponent[type] = component;
}

export const getModalComponentByType = (type) => {
    return typeToModalComponent[type];
}

export const openModal = ({type, propsPayload, reactModalProps}={}) => {
    store.dispatch(setModalOptionsAction({visibility: true ,type ,propsPayload, reactModalProps}))
}

export const closeModal = () => {
    store.dispatch(setModalOptionsAction({visibility: false}))
}