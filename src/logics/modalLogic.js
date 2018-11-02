import {store} from '../index';

import {setModalOptions as setModalOptionsAction} from "../actions/modalAction"

export const openModal = ({modalType, propsPayload}={}) => {

    store.dispatch(setModalOptionsAction({modalVisibility: true ,modalType ,propsPayload }))
}

export const closeModal = () => {
    store.dispatch(setModalOptionsAction({modalVisibility: false}))
}