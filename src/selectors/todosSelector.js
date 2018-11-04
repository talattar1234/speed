
import { createSelector } from 'reselect';
import {getFilterByDescription} from './filterSelector';
import {getSortType} from './sortSelector';
import ENUM from '../enum';
const getTodos = (state) => {
    return Object.values(state.todos);
}

export const getTodosDictionary = (state) => {
    return state.todos;
}




export const getVisibleTodos = createSelector([getTodos, getFilterByDescription, getSortType],
    (todos,visibilityFilter, sortType) => {
        return todos.filter(
            (todo)=>{ 
                return todo.description.includes(visibilityFilter) 
             }).sort((a,b)=>{ 
                 const direction = sortType === ENUM.SortType.CREATED_BY_NEWEST_FIRST ? 1 : -1;
                if(a.createdBy >= b.createdBy){
                    return direction
                }
                return -1*direction;
            });
    }
)

