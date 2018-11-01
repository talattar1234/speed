
import { createSelector } from 'reselect'

const getTodos = (state) => {
    return Object.values(state.todos);
}
const getVisibilityFilter = (state) => (state.visibilityFilter);


export const getVisibleTodos = createSelector([getTodos, getVisibilityFilter],
    (todos,visibilityFilter) => {
        return todos;
    }
    
)