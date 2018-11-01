import {store} from '../index';
import {addTodo as addTodoAction} from "../actions/todosAction"
export const addTodo = ({id, description}) => {
    store.dispatch(addTodoAction({id:5,description: 100}));
}