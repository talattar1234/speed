import axios from 'axios';

const instance = axios.create({

});


const sendSingleAjaxRequest = (axiosParams) => {
    return new Promise(async (resolve,reject) => {
        try{
            const result = await instance(axiosParams);
            resolve(result);
            return;
        }
        catch(e){
            reject("error");
        }
    })
}

export const sendAjaxRequest = ({retryNumber=1,axiosParams}={}) => {

    return new Promise(async (resolve,reject) => {
        for(let i = 0; i < retryNumber || retryNumber == "inf"; ++i){
            try{
                const result = await sendSingleAjaxRequest(axiosParams);
                resolve(result);
                return;
            }
            catch(e){

            }
        }
        reject("error");
        
    })

}

export const setRestToken = (token) => {
    instance.defaults.headers.common['Authorization'] =`Bearer ${ token }`;
}

export const clearRestToken = () => {
    delete instance.defaults.headers.common['Authorization'] 
}