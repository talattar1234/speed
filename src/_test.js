import {sendAjaxRequest} from './ajaxCaller';


export const test = () => {
    sendAjaxRequest({retryNumber: 10,axiosParams: {
        method: "get",
        urtl: 'https://httpbin.org/get',
    }}).then(()=>{
        alert("1").catch(()=>{
            alert("fucking ajax error")
        });
    })
}