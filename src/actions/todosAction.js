// ADD_TODO
export const addTodo = (
  {
    description = '',
    createdAt = 0,
    id,
  } = {}
) => ({
  type: 'ADD_TODO',
  todo: {
    id,
    description,
    createdAt
  }
});

// REMOVE_TODO
export const removeTodo = ( id = '') => ({
  type: 'REMOVE_TODO',
  id
});

// EDIT_TODO
export const updateTodo = (id, updates) => ({
  type: 'UPDATE_TODO',
  id,
  updates
});
