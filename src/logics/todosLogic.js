import {store} from '../index';
import {
    addTodo as addTodoAction,
    removeTodo as removeTodoAction,
    updateTodo as updateTodoAction
}                   from "../actions/todosAction";
import uuidv1 from 'uuid';
import ENUM from '../enum';

import {openModal as openModalLogic, closeModal as closeModalLogic } from '../logics/modalLogic';
import {getTodosDictionary} from '../selectors/todosSelector';

const getTodoById = (id) => {
    return getTodosDictionary(store.getState())[id];
}

export const openNewTodoModal = ()=> {
    openModalLogic({type: ENUM.ObjectType.TODO, propsPayload: {modalRole: ENUM.ModalRole.ADD}});
}

export const openEditTodoModal = ({id})=> {
    const selectedTodo = getTodoById(id);

    openModalLogic({type: ENUM.ObjectType.TODO, propsPayload: {...selectedTodo,modalRole: ENUM.ModalRole.EDIT}});
}

export const addTodo = ({id, description}) => {
    store.dispatch(addTodoAction({id,description,createdAt: Date.now() }));
}

export const removeTodo = (id) => {
    store.dispatch(removeTodoAction(id));
}

export const updateTodo = (id,updates) => {
    store.dispatch(updateTodoAction(id,updates));
}


export const _closeModal = ({action, payload}) =>{
   
    switch(action){
        case ENUM.ModalAction.CANCEL:
            break;
        case ENUM.ModalAction.ADD:
            const id = uuidv1();
            addTodo({...payload,id});
            break;
        case ENUM.ModalAction.UPDATE:
            updateTodo(payload.id,payload);
            break;
        default:
            break;
    }
    closeModalLogic();
}