import React from 'react';
import GaugeChart from 'react-gauge-chart'
import ReactSpeedometer from 'react-d3-speedometer';

interface Props {

}
const colorArr = [
    'rgb(255, 0, 0)',
    'rgb(255, 50, 0)',
    'rgb(255, 100, 0)',
    'rgb(255, 150, 0)',
    'rgb(255, 200, 0)',
    'rgb(255, 255, 0)',
    'rgb(200, 255, 0)',
    'rgb(150, 255, 0)',
    'rgb(100, 255, 0)',
    'rgb(50, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(50, 255, 0)',
    'rgb(100, 255, 0)',
    'rgb(150, 255, 0)',
    'rgb(200, 255, 0)',
    'rgb(255, 255, 0)',
    'rgb(255, 200, 0)',
    'rgb(255, 150, 0)',
    'rgb(255, 100, 0)',
    'rgb(255, 50, 0)',
    'rgb(255, 0, 0)',
]
export const Gauge: React.FC<Props> = () => {
    const textColor = '#AAA'
    return (
        <div>
            <ReactSpeedometer
            maxValue={500}
            value={473}
            needleColor="red"
            startColor="rgb(0, 183, 255)"
            segments={10}
            endColor="rgb(255, 196, 0)"
            textColor={textColor}
            />

            <GaugeChart id="gauge-chart2" 
            nrOfLevels={20} 
            percent={0.55} 
            colors={['rgb(0, 60, 255)', 'rgb(255, 251, 0)']}
            />
            <GaugeChart id="gauge-chart2" 
            nrOfLevels={21} 
            percent={0.86} 
            colors={colorArr}
            />

            <GaugeChart id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.1, 0.2, 0.4, 0.2, 0.1]}
            colors={['rgb(255, 0, 0)', 'rgb(255, 251, 0)','rgb(43, 255, 0)','rgb(255, 251, 0)', 'rgb(255, 0, 0)']}
            percent={0.37}
            arcPadding={0.02}
            />
        </div>
    );
}