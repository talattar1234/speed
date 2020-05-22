import React, {useState, useEffect, useRef} from "react";
import Chart from "chart.js";
let _data = [
    {name: '1', uv: 0},
];
let _counter = 1
let _addSum = 100;
let _maximumItems = 300;


const BitRate = ({lineColor, id}) =>{
    const canvasEl = useRef(null);
    let _interval;
    let chart = null;
    useEffect(()=>{
        //var ctx = document.getElementById(id).getContext('2d');
        var ctx = canvasEl.current.getContext('2d');
         chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    /*backgroundColor: 'rgb(255, 99, 132)',*/
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
        
            // Configuration options go here
            options: {
                animation: {
                    duration: 0 // general animation time
                },
                hover: {
                    animationDuration: 0 // duration of animations when hovering an item
                },
                responsiveAnimationDuration: 0 // animation duration after a resize
            }
        });

        setInterval(setUpdates,100)
        return (()=>{
            clearInterval(_interval)
        })
    },[])

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
        
        chart.data.datasets[0].data = _data.map((item)=>(item.uv))
        chart.update();
    }





    return (
        

        <canvas ref={canvasEl} id={id}></canvas>


    )
}
export default BitRate;