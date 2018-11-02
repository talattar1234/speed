import {store} from '../index';
import {
    addTodo as addTodoAction,
    removeTodo as removeTodoAction
}                   from "../actions/todosAction";
import uuidv1 from 'uuid';
import ENUM from '../enum';

import {openModal as openModalLogic, closeModal as closeModalLogic } from '../logics/modalLogic';

export const openNewTodoModal = ()=> {
    openModalLogic({type: ENUM.ObjectType.TODO, propsPayload: {modalRole: ENUM.ModalRole.ADD}});
}

export const addTodo = ({id, description}) => {
    store.dispatch(addTodoAction({id,description}));
}

export const removeTodo = (id) => {
    store.dispatch(removeTodoAction(id));
}

export const _closeModal = ({action, payload}) =>{
    const {description} = payload;
    switch(action){
        case ENUM.ModalAction.CANCEL:
            break;
        case ENUM.ModalAction.ADD:
            const id = uuidv1();
            addTodo({id,description})
        default:
            break;
    }
    closeModalLogic();
}