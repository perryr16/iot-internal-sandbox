import React, {useState} from 'react';
import sensorNE from '../../static/SensorNorthEast@2x.png'
import sensorNW from '../../static/SensorNorthWest@2x.png'
import Link from '@mui/material/Link'


interface Props {
    faceNorthEast?: boolean
    info?: string
    page: string
}
// Facing North East (NE)
export const Sensor: React.FC<Props> = (props) => {
    const {faceNorthEast, info, page} = props
    const pageName = 'line'
    const [hover, setHover] = useState(false)
    const  onHover = () => {
        setHover(true)
    }
    const  onLeave = () => {
        setHover(false)
    }


    return (
        <div>
            <div className='sensor-x' 
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                >
                <Link underline='none' href={`/${page}`}>
                {
                    faceNorthEast 
                    ? 
                    <div>
                        <img className='sensor' src={sensorNE} alt="sensor-ne" />
                    </div>
                    : 
                    <div>
                        <img className='sensor' src={sensorNW} alt="sensor-nw" />
                    </div>
                }
                </Link>
            </div>
            <div className='div-modal'> 
                {
                    hover 
                    ? <p className='info-modal'>{info}</p>
                    : null
                }
            </div>
        </div>
    );
}