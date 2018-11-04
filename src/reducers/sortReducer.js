// Sort Reducer
import ENUM from '../enum';
const sortReducerDefaultState = {
    type: ENUM.SortType.CREATED_BY_NEWEST_FIRST,
  };

  export default (state = sortReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_SORT_TYPE':
        return {
         ...state,
         type: action.payload.type
  
        }
      default:
        return state;
    }
  };
  