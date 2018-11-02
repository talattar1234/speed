import {store} from '../index';

import {setModalOptions as setModalOptionsAction} from "../actions/modalAction"

export const openModal = ({type}={}) => {

    store.dispatch(setModalOptionsAction({modalVisibility: true}))
}

export const closeModal = ({type}={}) => {
    store.dispatch(setModalOptionsAction({modalVisibility: false}))
}