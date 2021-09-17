import React from 'react';
import {Chart, Line} from 'react-chartjs-2'
import { lineData } from '../../../fixtures/lineData'
import './index.css'



export const LineGraph = () => {
    
    const dataX = lineData.map(point => point.time)
    const dataY1 = lineData.map(point => point.value1)
    const dataY2 = lineData.map(point => point.value2)
    const dataY3 = lineData.map(point => point.value3)
    
    const state = {
        labels: dataX,
        datasets: [
          {
            label: 'co2',
            fill: false,
            lineTension: 0.5,
            borderColor: 'rgb(23, 182, 255)',
            borderWidth: 2,
            data: dataY1,
            pointRadius:0,
          },
          {
            label: 'o2',
            fill: false,
            lineTension: 0.5,
            // backgroundColor: 'rgba(75,192,192,1)',x
            borderColor: 'rgb(172, 57, 57)',
            borderWidth: 2,
            data: dataY2,
            pointRadius:0,
          },
          {
            label: 'h20',
            fill: false,
            lineTension: 0.5,
            borderColor: 'rgb(57, 172, 109)',
            borderWidth: 2,
            data: dataY3,
            pointRadius:0,
          }
        ],
    
    }
    
    
    const options = {
      legend: {
        diplay: false,
      },
    
    }

    return (
        <div >
            <Line
                className='line-graph'
                data={state}
                options={options}
            />
        </div>
    );
}