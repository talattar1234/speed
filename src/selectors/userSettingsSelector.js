export const getAuthMode = (state) => {
    return state.userSettings.isAuth;
}

export const getUsername = (state) => {
    return state.userSettings.userInfo.unique_name;
}