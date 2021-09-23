import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

// IgrRadialGaugeModule.register()


export const GaugeHalf = (props:any) => {
    const {range1Color, range2Color, title, value, units, minValue, maxValue, intervals, range1, range2} = props; 

    const rangeColorString = range1Color + ', ' + range2Color

    // const title = 'Clock Seconds'
    return (
        <div className='gauge-half'>
             <IgrRadialGauge
                value={value}

                // Backing
                backingShape='Fitted'
                // backingBrush='linear-gradient(to right, rgb(0,0,0,0), rgb(0, 22, 1, 0.5))'
                backingBrush='transparent'
                backingStrokeThickness={2}
                backingOutline='linear-gradient(rgb(0,0,0,1) 40%, transparent 50%)'
                backingInnerExtent={.9}
                backingOuterExtent={0}

                // numbers
                fontBrush='#d4d4d4'
                font='15px RobotoThin'
                
                interval={intervals}
                minimumValue={minValue} 
                maximumValue={maxValue} 
                // rangeBrushes ="#a4bd29, #F86232"
                rangeBrushes ={rangeColorString}
                rangeOutlines="transparent, transparent"  
                
                
                // rangeOutlines="#a4bd29, #F86232"  
                scaleStartAngle={180}
                scaleEndAngle={0}

                
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
                    startValue={range1[0]} endValue={range1[1]}
                    innerStartExtent={0.53} innerEndExtent={0.53}
                    outerStartExtent={0.67} outerEndExtent={0.67} />
                <IgrRadialGaugeRange name="range2"
                    startValue={range2[0]} endValue={range2[1]}
                    innerStartExtent={0.53} innerEndExtent={0.53}
                    outerStartExtent={0.67} outerEndExtent={0.67} />
            </IgrRadialGauge>
            <div className='gauge-title'>
                {title}
            </div>
            <div className='value'>
                {value} {units}
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
