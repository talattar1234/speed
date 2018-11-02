import {store} from '../index';

import {setModalOptions as setModalOptionsAction} from "../actions/modalAction"

export const openModal = ({type, propsPayload}={}) => {

    store.dispatch(setModalOptionsAction({visibility: true ,type ,propsPayload }))
}

export const closeModal = () => {
    store.dispatch(setModalOptionsAction({visibility: false}))
}