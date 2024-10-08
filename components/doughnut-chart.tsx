"use client"


import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {ArcElement, Chart as ChartJs, Legend, Tooltip} from 'chart.js'

ChartJs.register(ArcElement,Tooltip,Legend)
const DoughnutChart= ({accounts}:DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1244,350,900],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
      }
    ],
    labels: ['bank 1','bank 2', 'bank 3']
  }
  return (
    
<Doughnut data={data} options={{
  cutout:'60%',
  plugins:{legend:{
    display:false
  }}
}}/>
  )
}

export default DoughnutChart