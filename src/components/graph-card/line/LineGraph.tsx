import React from 'react';
import {Line} from 'react-chartjs-2'
import { lineData } from '../../../fixtures/lineData'
import './index.css'

interface Props {

}

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
        // backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgb(23, 182, 255)',
        borderWidth: 2,
        data: dataY1,
        pointRadius:0,
      },
      {
        label: 'o2',
        fill: false,
        lineTension: 0.5,
        // backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgb(172, 57, 57)',
        borderWidth: 2,
        data: dataY2,
        pointRadius:0,
      },
      {
        label: 'h20',
        fill: false,
        lineTension: 0.5,
        // backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgb(57, 172, 109)',
        borderWidth: 2,
        data: dataY3,
        pointRadius:0,
      }
    ],
  }
// const state = {
//     labels: ['January', 'February', 'March',
//              'April', 'May'],
//     datasets: [
//       {
//         label: 'Rainfall',
//         fill: false,
//         lineTension: 0.5,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         data: [65, 59, 80, 81, 56]
//       }
//     ]
//   }

export const LineGraph: React.FC<Props> = () => {
    return (
        <div>
            <Line
                className='line-graph'
                data={state}
                options={{
                title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
                }
                }}
            />
        </div>
    );
}