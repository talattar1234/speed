// Expenses Reducer
const userSettingsReducerDefaultState = {
  isAuth: false,
  userInfo: {
    username: ''
  }
};

export default (state = userSettingsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER_SETTINGS':
      const {isAuth, userInfo} = action.userSettings    
      return {
       ...state,
        isAuth,
        userInfo: {
          ...state.userInfo,
          ...userInfo
        }
      }
  default:
      return state;
  }
};
