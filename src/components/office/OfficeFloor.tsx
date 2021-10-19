import React from 'react';
import floorPlan from '../../static/WithoutSensors@2x.png'
import {Sensor} from '../index'
import './index.css'

interface Props {

}

export const OfficeFloor: React.FC<Props> = () => {
    return (
        <div className='office-floor-content'>
            <div className='img-container'>
                <img className='floor-plan' src={floorPlan} alt="office-floor-plan" />
            </div>
            <div className='grid'>
                <div className='col left'>
                    <div className='row left-top'>
                        left top
                        <Sensor faceNorthEast={false} />

                    </div>
                    <div className='row left-mid'>
                        left mid
                        <Sensor faceNorthEast={false} />

                    </div>
                    <div className='row left-bot'>
                        left bot
                        {/* <Sensor faceNorthEast={true} /> */}

                    </div>
                </div>
                <div className='col center'>
                    <div className='row center-top'>
                        center top
                        <Sensor faceNorthEast={false} />
                        
                    </div>
                    <div className='row center-mid'>
                        center mid
                        <Sensor faceNorthEast={true} />

                    </div>
                    <div className='row center-bot'>
                        center bot
                    </div>
                </div>
                <div className='col right'>
                    <div className='row right-top'>
                        right top
                        <Sensor faceNorthEast={true} />

                    </div>
                    <div className='row right-mid'>
                        right mid
                        <Sensor faceNorthEast={true} />
                    </div>
                    <div className='row right-bot'>
                        right bot
                    </div>
                </div>
            </div>
        </div>
    );
}