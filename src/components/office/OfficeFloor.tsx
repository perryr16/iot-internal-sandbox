import React from 'react';
import floorPlan from '../../static/WithoutSensors@2x.png'
import {Sensor, Columnx} from '../index'
import './index.css'


interface Props {

}

export const OfficeFloor: React.FC<Props> = () => {


    return (
        <div className='office-floor-content grid' style={{border: '1px solid yellow'}}>
            <img className='floor-plan' src={floorPlan} alt="office-floor-plan" style={{border: '1px solid blue'}}/>
            {/* col 1 */}
            <Columnx
                child3={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: H20 \n Type: SensManf'}
                    />
                }
                child4={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: H20 \n Type: SensManf'}
                    />
                }
            />
            {/* col 2 */}
            <Columnx
                child2={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: H20 \n Type: SensManf'}
                    />
                }
                child4={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: H20 \n Type: SensManf'}
                    />
                }
            />
            {/* col 3 */}
            <Columnx
                child2={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: Motion \n Type: SensManf'}
                    />}
                child4={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: Motion \n Type: SensManf'}
                        faceNorthEast={true}
                    />}
                />
            {/* col 4 */}
            <Columnx
                child1={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: CO2 \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
                child4={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: CO2 \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 5 */}
            <Columnx
                child2={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: Motion \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
                child5={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: Temperature \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 6 */}
            <Columnx
                child2={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: CO2 \n Type: SensManf'}
                    />
                }
                child5={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: Temperature \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 7 */}
            <Columnx
                child3={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: CO \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
                child6={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: Temperature \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 8 */}
            <Columnx
                child3={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: CO2 \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
                child6={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: Temperature \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 9 */}
            <Columnx
                child4={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: Temperature \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
                child6={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: Temperature \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 10 */}
            <Columnx
                child4={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: CO2 \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
                child5={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: CO2 \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
                child6={
                    <Sensor 
                        page={'Bar'}
                        info={'Sensor: CO2 \n Type: SensManf'}
                        faceNorthEast={true}
                    />
                }
            />
        </div>
    );
}