import {sendAjaxRequest} from './ajaxCaller';


export const test = () => {
    sendAjaxRequest({retryNumber: 10,axiosParams: {
        method: "get",
        url: 'https://httpb3in.org/get',
        timeout: 3000
    }}).then((data)=>{
       // alert(JSON.stringify(data))}).catch(()=>{
          //  alert("fucking ajax error")
        
    })
}