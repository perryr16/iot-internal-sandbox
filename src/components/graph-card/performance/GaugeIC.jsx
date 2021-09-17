import React from 'react';
import './index.css'
import * as d3 from 'd3'



export const GaugeIC = () => {

    const innerRadius = 0.8
    const outerRadius = 1



    const createColorArcs = () => {
        const arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(-Math.PI/1.5)
            .endAngle(Math.PI/1.5)
            .padAngle(0.05)
            .padRadius(0.05)
        return arc();
    }


    const xAxisTransform = (hour) => {
        return `rotate(${hour * (180/Math.PI) - 90})translate(${innerRadius}, 0)`
    }


    return (
        <div >
            <svg
                width='9em'
                height='12em'
                viewBox={[-1,-1,2,1].join(' ')}
                transform={'translate(4.5em,4.5em)'}
            >
                {/* arc */}
                <path
                    d={createColorArcs()}
                    fill={'rgb(255,255,0)'}
                    fillOpacity={'0.5'}
                >
                </path>
                {/* x-axis labels / data */}
                <g id='xAxis'>
                    <g
                        className='dial?'
                        textAnchor='end'
                        transform={xAxisTransform(Math.PI)}
                    >
                        {/* ticks? */}
                        <line
                            x2="-5" 
                            stroke="#fff" 
                            strokeWidth="0.1"
                            width='1px'
                        >
                        </line>
                        {/* <line>
                        </line> */}
                        {/* a dot? */}
                        <text
                            x='0.15'
                            y='0.25'
                            fill='#fff'
                            style={{fontSize: '8pt'}}
                        >
                            {"TEXT!"}
                        </text>
                    </g>
                </g>

            </svg>
        </div>
    );
}