import React, {useState, useEffect} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
let _data = [
    {name: '1', uv: 0},
];
let _counter = 1
let _addSum = 100;
let _maximumItems = 300;
let _i = 0;
let _j =30;



/** UseInterval !!!!!!!!! */




const BitRate3 = ({lineColor, setIntervalTime}) =>{
    
    const [data, setData] = useState(_data)
    const setUpdates = ()=>{
 
        //_counter++;
        if(_i===_data.length){
            _i=0; 
            _j = 30;
        }
        const newData = _data.map((item,index)=>(
                index>_i && index<_j ? {name: index.toString(),uv: undefined} : item
        ))
        _i++;
        _j++;
        setData(newData.slice())
    }

    useEffect(()=>{
        for(let i=0;i<_maximumItems;i++){
            const newRow = {
                name: i.toString(),
                uv: Math.floor(Math.random() * 120)
                /*uv: Math.sin(_counter%360)*/
            }    
            _data.push(newRow);
        }
       const  _interval = setInterval(setUpdates,setIntervalTime);
        return ()=>{
            clearInterval(_interval)
        }
    },[])


    return (
        


  <LineChart width={1000} height={150} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke={lineColor} strokeWidth={2} isAnimationActive={false} dot={false} activeDot={false} />
    {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
    <XAxis dataKey="name" />
    <YAxis type="number" domain={[0, 150]}   />
   
  </LineChart>

    )
}
export default BitRate3;