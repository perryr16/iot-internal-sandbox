import React from 'react';
import {Chart, Line} from 'react-chartjs-2'
import { lineData } from '../../../fixtures/lineData'
import './index.css'



export const LineGraph = () => {
    
    const dataX = lineData.map(point => point.time)
    const dataY1 = lineData.map(point => point.value1)
    const dataY2 = lineData.map(point => point.value2)
    const dataY3 = lineData.map(point => point.value3)

    // const canvas = document.getElementById('line-chart')
    // const ctx = canvas.getContext("2d");
    // const gradient = ctx.createLinearGradient(0, 0, 300, 0);
    // gradient.addColorStop(0, '#20f08b');
    // gradient.addColorStop(0.5, '#20f08b');
    // gradient.addColorStop(1, '#07dfb1');

    const state = {
        labels: dataX,
        datasets: [
          {
            label: 'co2',
            fill: true,
            backgroundColor: 'rgb(255,0,0,0.3)',
            lineTension: 0.5,
            borderColor: 'rgb(23, 182, 255)',
            borderWidth: 2,
            data: dataY1,
            pointRadius:0,
          },
          {
            label: 'o2',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgb(0,255,0,0.3)',
            // backgroundColor: 'rgba(75,192,192,1)',x
            borderColor: 'rgb(172, 57, 57)',
            borderWidth: 2,
            data: dataY2,
            pointRadius:0,
          },
          {
            label: 'h20',
            lineTension: 0.5,
            fill: true,
            backgroundColor: 'rgb(255,255,0,0.3)',
            borderColor: 'rgb(57, 172, 109)',
            borderWidth: 2,
            data: dataY3,
            pointRadius:0,
          }
        ],
    
    }
    
    
    const options = {
      legend: {
        display: false
      }
    
    }

    return (
        <div >
            <Line
                id='line-chart'
                className='line-graph'
                data={state}
                options={{
                  legend: {
                    display: false
                  }
                }
                }
            />
        </div>
    );
}