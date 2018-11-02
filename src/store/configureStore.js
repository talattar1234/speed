import { createStore, combineReducers } from 'redux';
import todosReducer from '../reducers/todosReducer';
import modalReducer from '../reducers/modalReducer';
export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      modal: modalReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
