import React from 'react';
import CalculateFunc from '../Calculate';
import { Bar } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);







const IndividualChart = (props) => {
  
  let data
  const {name, array} = props.avarage
  // setInterval(() => {
  //   console.log(array)
  // }, 1000);
  // console.log(array)
   data ={
    labels:['smoke', 'phone', 'sleep', 'mask'],
    datasets:[{
      label: 'quality',
      data: array,
      
      backgroundColor: [
        'red',
        'blue',
        'green',
        'orange',
   ],
  borderWidth: 1
  },
  // {
  //   label: "Quantity",
  //   data: [10,9,3,20],
  //   backgroundColor:"black",
  //   borderColor: "black"
  // }
]
}

  return( 
  <div className='individualChart'>
    {/* <b>saat</b>
    <p> {name} </p> */}
    <Bar height={150} data={data} />
  </div>
  )
};

export default IndividualChart;
