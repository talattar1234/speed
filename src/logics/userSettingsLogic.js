import {setRestToken, clearRestToken, sendAjaxRequest} from '../ajaxCaller';
import {setUserSettings as setUserSettingsAction, logOut as logOutAction} from '../actions/userSettingsAction';
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
                if(username == password){
                    const token = {
                        username,
                        role: "admin"
                    }
                    resolve({token: JSON.stringify(token)})
                }
                else{
                    reject({message: 'Wrong username \ password'})
                }
                
            },2000)
        }
        else{
            sendAjaxRequest({axiosParams: {
                method: 'post',
                url: 'https://avihost.ddns.net:446/api/users/login', /*'http://localhost:3000/api/login',*/
                data: {
                    userName: username,
                    passWord: password
                }
            }})
            .then((res)=>{
                const token = res.data;
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
            },2000)
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
                resolve({isAuth: true});
            })
            .catch(({message})=>{
                reject({message});
            })
    })
}

export const signOut = () => {
    return new Promise((resolve,reject)=>{
        const isAuth = false;
        removeToken(); //local storage
        clearRestToken();
        //store.dispatch(setUserSettingsAction({isAuth}))
        store.dispatch(logOutAction());
        resolve({isAuth});
    })
}

export const checkIfAuth = () => {
    return new Promise((resolve,reject)=>{
        const token = getToken();
        if(token){
            _serverCheckTokenValidation({token}).then(({isAuth})=>{
                if(isAuth){
                    setUserSettingsFromToken();
                }
                
                resolve({isAuth});
            }).catch((e)=>{
                resolve({isAuth:false});
            })
        }else{
            resolve({isAuth:false});
        }

        
    })

}