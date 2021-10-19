import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2'
import {Chart} from 'chart.js'
import { lineData } from '../../../fixtures/lineData'
import './index.css'



export const LineGraph = () => {
    const [time, setTime] = useState() 
    const [dataX, setDataX] = useState(lineData.map(point => point.time)) 
    const [dataY1, setDataY1] = useState(lineData.map(point => point.value1))
    const [dataY2, setDataY2] = useState(lineData.map(point => point.value2))
    const [dataY3, setDataY3] = useState(lineData.map(point => point.value3))
    // const dataX = lineData.map(point => point.time)
    // const dataY1 = lineData.map(point => point.value1)
    // const dataY2 = lineData.map(point => point.value2)
    // const dataY3 = lineData.map(point => point.value3)

    const timeNow = () => {
      const dateRaw = (new Date())
      setTime(dateRaw)
    }

    const intervalMS = 200
    useEffect(() => {
        const interval = setInterval(() => {
            (timeNow())
        }, intervalMS)
        return () => clearInterval(interval)
    },[])

    useEffect(() => {
      dataX.push(dataX[dataX.length-1]+1)
      let mult = Math.random() < 0.5 ? 1:-1
      dataY1.push(dataY1[dataY1.length-1]+ (Math.random()* mult))
      mult = Math.random() < 0.5 ? 1:-1
      dataY2.push(dataY2[dataY2.length-1]+ (Math.random()* mult))
      mult = Math.random() < 0.5 ? 1:-1
      dataY3.push(dataY3[dataY3.length-1]+ (Math.random()* mult))
      if (dataX.length > 200) {
        dataX.shift()
        dataY1.shift()
        dataY2.shift()
        dataY3.shift()
      }
    }, [time])


    useEffect(() => {
      // Chart.pluginService.register({
      //   afterDraw: function(chart, easing) {
      //     if (chart.tooltip._active && chart.tooltip._active.length) {
      //       const activePoint = chart.controller.tooltip._active[0];
      //       const ctx = chart.ctx;
      //       const x = activePoint.tooltipPosition().x;
      //       const topY = chart.scales['y-axis-0'].top;
      //       const bottomY = chart.scales['y-axis-0'].bottom;
  
      //       ctx.save();
      //       ctx.beginPath();
      //       ctx.moveTo(x, topY);
      //       ctx.lineTo(x, bottomY);
      //       ctx.lineWidth = 2;
      //       ctx.strokeStyle = '#e23fa9';
      //       ctx.stroke();
      //       ctx.restore();
      //     }
      //   }
      // });

      // Chart.defaults.LineWithLine = Chart.defaults.line;
      // Chart.controllers.LineWithLine = Chart.controllers.line.extend({
      //   draw: function (ease) {
      //     Chart.controllers.line.prototype.draw.call(this, ease);
      //     if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      //       const activePoint = this.chart.tooltip._active[0],
      //         ctx = this.chart.ctx,
      //         x = activePoint.tooltipPosition().x,
      //         topY = this.chart.legend.bottom,
      //         bottomY = this.chart.chartArea.bottom;

      //       // draw line
      //       ctx.save();
      //       ctx.beginPath();
      //       ctx.moveTo(x, topY);
      //       ctx.lineTo(x, bottomY);
      //       ctx.lineWidth = 2;
      //       ctx.strokeStyle = '#07C';
      //       ctx.stroke();
      //       ctx.restore();
      //     }
      //   },
      // });

      

    },[])

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
                  animation: {
                    duration: 0
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'left',
                    },
                    tooltip: {
                      mode: 'x',
                      intersect: false,
                    }
                  },

                  interaction: {
                    intersect: false
                  },
                  // hover: {
                  //   mode: 'index',
                  //   intersect: false
                  // }
                }
                }
            />
        </div>
    );
}