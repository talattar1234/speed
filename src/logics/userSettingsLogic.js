import {setRestToken, clearRestToken, sendAjaxRequest} from '../ajaxCaller';
import {setUserSettings as setUserSettingsAction} from '../actions/userSettingsAction';
import * as jwt_decode from "jwt-decode";
import CONFIG from '../config';
import {store} from '../index';

const getToken = () => {
    return  localStorage.getItem('speed');
}
const setToken = (token) => {
    localStorage.setItem('speed',token);
}
const removeToken = () => {
    localStorage.removeItem('speed');
}

const decodeTokenPayload = (token)=>{
    if(CONFIG.isSimulationMode){
        return JSON.parse(token);
    }
    else{
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
    }    
}

const getTokenPayload = ()=>{
    const token = getToken();
    if(token){
        return decodeTokenPayload(token);
    }
}



const _serverLogin = ({username,password}) => {
    return new Promise((resolve,reject)=>{
        if(CONFIG.isSimulationMode){
            setTimeout(()=>{
                const token = {
                    username,
                    role: "admin"
                }
                resolve({token: JSON.stringify(token)})
            },1500)
        }
        else{
            sendAjaxRequest({axiosParams: {
                method: 'post',
                url: 'http://localhost:3000/api/login',
                data: {
                    username,
                    password
                }
            }})
            .then(({token})=>{
                resolve({token})
            })
            .catch((e)=>{
                reject(e)
            })
        }
    }) 
}

const _serverCheckTokenValidation = ({token}) => {
    return new Promise((resolve,reject)=>{

        if(CONFIG.isSimulationMode){
            setTimeout(()=>{
                resolve({isAuth:true})
            },1500)
        }
        else{
            sendAjaxRequest({axiosParams:{
                method: 'get',
                url: 'http://localhost:3000/api/ensureToken',
                data: {
                    token
                }
            }}).then(({isAuth})=>{
                resolve({isAuth})
            }).catch((e)=>{
                reject(e)
            })
        }
       
    }) 
}

const setUserSettingsFromToken =  () => {
    const token = getToken();
    if(token){
        const isAuth = true;
        const payload = decodeTokenPayload(token);
        store.dispatch(setUserSettingsAction({isAuth,userInfo: payload}))
    }
}

export const signIn = ({username, password}) => {
    return new Promise((resolve,reject)=>{
        _serverLogin({username,password})
            .then(({token})=>{
                const isAuth = true;
                setToken(token); // local storage
                setRestToken(token);
                const userInfo = decodeTokenPayload(token);
                store.dispatch(setUserSettingsAction({isAuth,userInfo}))
            })
            .catch((e)=>{

            })
    })
}

export const signOut = () => {
    return new Promise((resolve,reject)=>{
        const isAuth = false;
        removeToken(); //local storage
        clearRestToken();
        store.dispatch(setUserSettingsAction({isAuth}))
        resolve({isAuth});
    })
}

export const checkIfAuth = () => {
    return new Promise((resolve,reject)=>{
        const token = getToken();
        if(token){
            _serverCheckTokenValidation({token}).then(({isAuth})=>{
                setUserSettingsFromToken();
                resolve({isAuth});
            }).catch((e)=>{
                resolve({isAuth:false});
            })
        }else{
            resolve({isAuth:false});
        }

        
    })

}