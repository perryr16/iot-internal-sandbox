import React ,{useEffect, useState} from 'react';
import { 
    Gauge34, GaugeHalf 
} from '../../index';

export const PerformanceContainer = (props) => {
    const [time, setTime] = useState()

    const timeNow = () => {
        const dateRaw = (new Date()).toLocaleString('en-US', {hour12: true}).split(',')[1].split(':')[2].split(' ')[0]
        setTime(dateRaw)
    }

    const intervalMS = 1000
    useEffect(() => {
        const interval = setInterval(() => {
            (timeNow())
        }, intervalMS)
        return () => clearInterval(interval)
    },[])

    return (
        <div className='grid-container' style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", gridGap: 0, paddingBottom: '100px' }}>
                <div></div>
                <Gauge34/>
                <div></div>
                <GaugeHalf 
                    range1Color={'green'}
                    range2Color={'green'}
                    range1={[0,0]}
                    range2={[40,100]}
                    title={'Title 1'}
                    value={parseInt(time)+10}
                    minValue={0}
                    maxValue={100}
                    intervals={20}
                />
                <GaugeHalf
                    range1Color={'linear-gradient(#2fa1ff, blue)'}
                    range2Color={'linear-gradient(purple, #4e0014)'}
                    range1={[0,40]}
                    range2={[90,100]}
                    title={'Title 2'}
                    value={parseInt(time)+20}
                    minValue={0}
                    maxValue={100}
                    intervals={20}
                />
                <GaugeHalf
                    range1Color={'linear-gradient(#2fa1ff, green)'}
                    range2Color={'linear-gradient(yellow, red)'}
                    range1={[0,50]}
                    range2={[70,100]}
                    title={'Title 3'}
                    value={parseInt(time)+30}
                    minValue={0}
                    maxValue={100}
                    intervals={20}
                
                />
            {/* {props.children.map(child => {
                return(
                    <div className='child-container'>
                    {child}
                    </div>
                )
            })} */}
        </div>
    );
}