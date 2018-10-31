// Expenses Reducer

const todosReducerDefaultState = {};

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        [action.id]: action.todo
      };
    case 'REMOVE_TODO':
      return state.filter(({ id }) => id !== action.id);
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
