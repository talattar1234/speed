import {store} from '../index';
import {
    addTodo as addTodoAction,
    removeTodo as removeTodoAction
}                   from "../actions/todosAction"

export const addTodo = ({id, description}) => {
    store.dispatch(addTodoAction({id,description}));
}

export const removeTodo = (id) => {
    store.dispatch(removeTodoAction(id));
}