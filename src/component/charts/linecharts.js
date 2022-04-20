import React from 'react';
import CalculateFunc from '../Calculate';
import Data from '../../data/data';  
import { Line } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);







const Linechart = (props) => {
  const {
    TotalSmoke,
    TotalPhone,
    TotalSleep,
    TotalMask
  } = CalculateFunc(Data)
  // console.log(TotalSmoke)
  // console.log(TotalPhone)
  // console.log(TotalSleep)
  // console.log(TotalMask)
  const data ={
    labels:['smoke', 'phone', 'sleep', 'mask'],
    datasets:[{
      data:[TotalSmoke + 2,TotalPhone+10,TotalSleep - 5,TotalMask+ 10],
      borderColor: 'green',
      backgroundColor: 'blue',
    borderWidth: 2
    }]
  }

  return( 
  <div>
    <b>Günlük</b>
    <p> {props.name} </p>
    <Line height={100} data={data} />
  </div>
  )
};

export default Linechart;
