// Expenses Reducer

const todosReducerDefaultState = {};

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        [action.todo.id]: action.todo
      };
    case 'REMOVE_TODO':
      let newTodos = Object.assign({},state);
      delete newTodos[action.id];
      return newTodos;
    case 'EDIT_TODO':
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            ...action.todo
          }
        }
      
    default:
      return state;
  }
};
