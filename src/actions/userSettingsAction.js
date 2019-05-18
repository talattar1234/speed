export const setUserSettings = ({userInfo,isAuth}={}) => ({

    type: "SET_USER_SETTINGS",
    userSettings: {
        userInfo,
        isAuth
    }
})

export const logOut = ()=> ({
    type: "USER_LOGOUT"
})