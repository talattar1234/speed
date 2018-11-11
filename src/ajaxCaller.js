import axios from 'axios';


const sendSingleAjaxRequest = (axiosParams) => {
    return new Promise(async (resolve,reject) => {
        try{
            const result = await axios(axiosParams);
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

