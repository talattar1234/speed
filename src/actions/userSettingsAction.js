export const setUserSettings = ({username,isAuth}={}) => ({

    type: "SET_USER_SETTINGS",
    userSettings: {
        username,
        isAuth
    }
})