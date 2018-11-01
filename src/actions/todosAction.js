import uuid from 'uuid';

// ADD_TODO
export const addTodo = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeTodo = ( id = '') => ({
  type: 'REMOVE_TODO',
  id
});

// EDIT_EXPENSE
export const editTodo = (id, updates) => ({
  type: 'EDIT_TODO',
  id,
  updates
});
