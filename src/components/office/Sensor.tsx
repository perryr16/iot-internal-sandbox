import React from 'react';
import sensorNE from '../../static/SensorNorthEast@2x.png'
import sensorNW from '../../static/SensorNorthWest@2x.png'

interface Props {
    faceNorthEast: boolean
}
// Facing North East (NE)
export const Sensor: React.FC<Props> = ({faceNorthEast}) => {

    return (
        <div >
            <div className='sensor-container'>
                {
                    faceNorthEast 
                    ? 
                    <div>
                        <img className='sensor' src={sensorNE} alt="sensor-ne" />
                        <div className='halo-ne'></div>
                    </div>
                    : 
                    <div>
                        <img className='sensor' src={sensorNW} alt="sensor-nw" />
                        <div className='halo-nw'></div>    
                    </div>
                }
            </div>
        </div>
    );
}