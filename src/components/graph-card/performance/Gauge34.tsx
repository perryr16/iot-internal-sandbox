import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register()


export const Gauge34 = () => {

    const [time, setTime] = useState()

    const timeNow = () => {
        const dateRaw:any = (new Date()).toLocaleString('en-US', {hour12: true}).split(',')[1].split(':')[2].split(' ')[0]
        setTime(dateRaw)
    }

    const intervalMS = 1000
    useEffect(() => {
        const interval = setInterval(() => {
            (timeNow())
        }, intervalMS)
        return () => clearInterval(interval)
    },[])

    const title = 'Clock Seconds'
    return (
        <div className='gauge-radial'>
             <IgrRadialGauge
                value={time}
                // Backing
                backingShape='Fitted'
                // backingBrush='linear-gradient(to right, rgb(0,0,0,0), rgb(0, 22, 1, 0.5))'
                backingBrush='transparent'
                backingStrokeThickness={2}
                backingOutline='linear-gradient(rgb(0,0,0,1) 1%, transparent 90%)'
                backingInnerExtent={.9}
                backingOuterExtent={0}

                // numbers
                fontBrush='#d4d4d4'
                font='bold 20px RobotoThin'
                
                interval={10}
                minimumValue={0} 
                maximumValue={100} 
                // rangeBrushes ="#a4bd29, #F86232"
                rangeBrushes ="linear-gradient(#2fa1ff, #02243f), linear-gradient(#ff2f5c, #4e0014)"
                rangeOutlines="transparent, transparent"  
                
                
                // rangeOutlines="#a4bd29, #F86232"  
                // scaleStartAngle={180}
                // scaleEndAngle={0}
                scaleStartAngle={150}
                scaleEndAngle={30}
                
                //Needle
                needleShape='Triangle'
                needlePivotShape='Circle'
                needleBrush='grey'
                // needleBrush='rgb(26, 26, 26)'
                // needleBrush='linear-gradient(to right, grey, green)'
                // needleOutline='transparent'
                needleOutline='black'
                needlePivotWidthRatio={0.05}

                scaleBrush='black'
                scaleEndExtent={.7}
                scaleStartExtent={.5}

                // Ticks
                tickStartExtent={0.5}
                tickEndExtent={0.65}
                minorTickStartExtent={0.5}
                minorTickEndExtent={0.6}
                tickBrush='#d4d4d4'
                minorTickBrush='grey'
                

                // Labels 
                labelExtent={0.8}


        
                
                >
                <IgrRadialGaugeRange name="range1"
                    startValue={0} endValue={30}
                    innerStartExtent={0.53} innerEndExtent={0.53}
                    outerStartExtent={0.67} outerEndExtent={0.67} />
                <IgrRadialGaugeRange name="range2"
                    startValue={70} endValue={100}
                    innerStartExtent={0.53} innerEndExtent={0.53}
                    outerStartExtent={0.67} outerEndExtent={0.67} />
            </IgrRadialGauge>
            <div className='value'>
                {time} s
            </div>
            <div className='gauge-title'>
                {title}
            </div>
        </div>
        // <IgrRadialGauge height="400px" width="400px"
        //     value={25}
        //     interval={5}
        //     minimumValue={0}
        //     maximumValue={100}>
        //     <IgrRadialGaugeRange startValue={0}
        //                         endValue={30}
        //                         brush="red"/>
        //     <IgrRadialGaugeRange startValue={30}
        //                         endValue={60}
        //                         brush="yellow"/>
        //     <IgrRadialGaugeRange startValue={60}
        //                         endValue={100}
        //                         brush="green"/>
        // </IgrRadialGauge>
    
    )
}
