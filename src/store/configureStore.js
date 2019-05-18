import { createStore, combineReducers } from 'redux';
import todosReducer from '../reducers/todosReducer';
import modalReducer from '../reducers/modalReducer';
import filterReducer from '../reducers/filterReducer';
import sortReducer from '../reducers/sortReducer';
import userSettingsReducer from "../reducers/userSettingsReducer";
export default () => {
  const appReducer =   combineReducers({
    todos: todosReducer,
    modal: modalReducer,
    filter: filterReducer,
    sort: sortReducer,
    userSettings: userSettingsReducer
  });

  const rootReducer = (state, action) => {
    if(action.type === 'USER_LOGOUT'){
      state = undefined;
    }
    return appReducer(state,action);
  }

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
