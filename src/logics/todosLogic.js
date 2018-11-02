import {store} from '../index';
import {
    addTodo as addTodoAction,
    removeTodo as removeTodoAction
}                   from "../actions/todosAction";

import ENUM from '../enum';

import {openModal, closeModal } from '../logics/modalLogic';

export const openTodoModal = ()=> {
    openModal({type: ENUM.ObjectType.TODO , propsPayload: {id:1}});
}


export const addTodo = ({id, description}) => {
    store.dispatch(addTodoAction({id,description}));
}

export const removeTodo = (id) => {
    store.dispatch(removeTodoAction(id));
}

export const _closeModal = () =>{
    closeModal();
}