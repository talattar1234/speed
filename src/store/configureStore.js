import { createStore, combineReducers } from 'redux';
import todosReducer from '../reducers/todosReducer';
import modalReducer from '../reducers/modalReducer';
import filterReducer from '../reducers/filterReducer';
import sortReducer from '../reducers/sortReducer';
import userSettingsReducer from "../reducers/userSettingsReducer";
export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      modal: modalReducer,
      filter: filterReducer,
      sort: sortReducer,
      userSettings: userSettingsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
