import {setRestToken, clearRestToken} from '../ajaxCaller';
import {setUserSettings as setUserSettingsAction} from '../actions/userSettingsAction';
import {store} from '../index';



export const signIn = ({username, password}) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const token = "MyToken";
            const isAuth = true;
            localStorage.setItem('speed',token);
            setRestToken(token)
            store.dispatch(setUserSettingsAction({username,isAuth}))
            resolve({isAuth})
        },2000)   
    })
}

export const signOut = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            localStorage.removeItem("speed");
            clearRestToken();
            store.dispatch(setUserSettingsAction({isAuth:false}))
            resolve();
        },2000)   
    })
}