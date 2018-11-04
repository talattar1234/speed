// Expenses Reducer
const filterReducerDefaultState = {
    filterByDescription: '',
  };

  export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_FILTER_BY_DESCRIPTION':
        return {
         ...state,
         filterByDescription: action.payload.filterByDescription
  
        }
      default:
        return state;
    }
  };
  