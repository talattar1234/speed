import React, {useState} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
let _data = [
    {name: '1', uv: 0},
];
let _counter = 1
let _addSum = 100;
let _maximumItems = 300;


const BitRate = ({lineColor, setIntervalTime}) =>{
    let _interval;
    const [data, setData] = useState(_data)
    const setUpdates = ()=>{
        const newRow = {
            name: _counter.toString(),
            uv: Math.floor(Math.random() * 120)
            /*uv: Math.sin(_counter%360)*/
        }
        _counter++;
        _data.push(newRow);
        if(_data.length>_maximumItems){
            _data.shift();
        }
        
        
        setData(_data.slice())
    }

    useState(()=>{
        _interval = setInterval(setUpdates,setIntervalTime);
        return ()=>{
            clearInterval(_interval)
        }
    },[])


    return (
        


  <LineChart width={1000} height={150} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke={lineColor} strokeWidth={2} isAnimationActive={false} dot={false} activeDot={false} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis type="number" domain={[0, 150]}   />
   
  </LineChart>

    )
}
export default BitRate;