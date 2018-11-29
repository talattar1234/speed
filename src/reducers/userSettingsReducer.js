// Expenses Reducer
const userSettingsReducerDefaultState = {
  isAuth: false,
  username: ''
};

export default (state = userSettingsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER_SETTINGS':
      const {isAuth, username} = action.userSettings    
      return {
       ...state,
        isAuth,
        username
      }
  default:
      return state;
  }
};
