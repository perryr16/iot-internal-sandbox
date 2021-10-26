import React from 'react';
import floorPlan from '../../static/WithoutSensors@2x.png'
import {Sensor, Columnx} from '../index'
import './index.css'


interface Props {

}

export const OfficeFloor: React.FC<Props> = () => {


    return (
        <div className='office-floor-content grid'>
            <img className='floor-plan' src={floorPlan} alt="office-floor-plan" />
            {/* col 1 */}
            <Columnx
                child3={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: H20 \n Type: ABC Sensor \n Graph: Line'}
                    />
                }
                // child4={
                //     <Sensor 
                //         page={'Line'}
                //         info={'Sensor: H20 \n Type: ABC Sensor \n Graph: Line'}
                //     />
                // }
            />
            {/* col 2 */}
            <Columnx
                // child2={
                //     <Sensor 
                //         page={'Line'}
                //         info={'Sensor: H20 \n Type: ABC Sensor \n Graph: Line'}
                //     />
                // }
                child5={
                    <Sensor 
                        page={'Pie'}
                        info={'Sensor: H20 \n Type: ABC Sensor \n Graph: Pie'}
                    />
                }
            />
            {/* col 3 */}
            <Columnx
                // child2={
                //     <Sensor 
                //         page={'Line'} 
                //         info={'Sensor: Motion \n Type: ABC Sensor \n Graph: Line'}
                //     />}
                // child4={
                //     <Sensor 
                //         page={'Line'}
                //         info={'Sensor: Motion \n Type: ABC Sensor \n Graph: Line'}
                //         faceNorthEast={true}
                //     />}
                />
            {/* col 4 */}
            <Columnx
                child1={
                    <Sensor 
                        page={'Line'} 
                        info={'Sensor: CO2 \n Type: ABC Sensor \n Graph: Line'}
                        faceNorthEast={true}
                    />
                }
                child3={
                    <Sensor 
                        page={'Bar'}
                        info={'Sensor: CO2 \n Type: ABC Sensor \n Graph: Bar'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 5 */}
            <Columnx
                // child2={
                //     <Sensor 
                //         page={'Line'} 
                //         info={'Sensor: Motion \n Type: ABC Sensor \n Graph: Line'}
                //         faceNorthEast={true}
                //     />
                // }
                // child5={
                //     <Sensor 
                //         page={'Line'}
                //         info={'Sensor: Temperature \n Type: ABC Sensor \n Graph: Line'}
                //         faceNorthEast={true}
                //     />
                // }
            />
            {/* col 6 */}
            <Columnx
                // child2={
                //     <Sensor 
                //         page={'Line'} 
                //         info={'Sensor: CO2 \n Type: ABC Sensor \n Graph: Line'}
                //     />
                // }
                // child5={
                //     <Sensor 
                //         page={'Line'}
                //         info={'Sensor: Temperature \n Type: ABC Sensor \n Graph: Line'}
                //         faceNorthEast={true}
                //     />
                // }
            />
            {/* col 7 */}
            <Columnx
                child3={
                    <Sensor 
                        page={'Gauge'} 
                        info={'Sensor: CO \n Type: ABC Sensor \n Graph: Gauge'}
                        faceNorthEast={true}
                    />
                }
                child6={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: Temperature \n Type: ABC Sensor \n Graph: Line'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 8 */}
            <Columnx
                // child3={
                //     <Sensor 
                //         page={'Line'} 
                //         info={'Sensor: CO2 \n Type: ABC Sensor \n Graph: Line'}
                //         faceNorthEast={true}
                //     />
                // }
                // child6={
                //     <Sensor 
                //         page={'Line'}
                //         info={'Sensor: Temperature \n Type: ABC Sensor \n Graph: Line'}
                //         faceNorthEast={true}
                //     />
                // }
            />
            {/* col 9 */}
            <Columnx
                child4={
                    <Sensor 
                        page={'Gauge'} 
                        info={'Sensor: Temperature \n Type: ABC Sensor \n Graph: Gauge'}
                        faceNorthEast={true}
                    />
                }
                child6={
                    <Sensor 
                        page={'Line'}
                        info={'Sensor: Temperature \n Type: ABC Sensor \n Graph: Line'}
                        faceNorthEast={true}
                    />
                }
            />
            {/* col 10 */}
            <Columnx
                // child4={
                //     <Sensor 
                //         page={'Line'} 
                //         info={'Sensor: CO2 \n Type: ABC Sensor \n Graph: Line'}
                //         faceNorthEast={true}
                //     />
                // }
                // child5={
                //     <Sensor 
                //         page={'Line'}
                //         info={'Sensor: CO2 \n Type: ABC Sensor \n Graph: Line'}
                //         faceNorthEast={true}
                //     />
                // }
                // child6={
                //     <Sensor 
                //         page={'Bar'}
                //         info={'Sensor: CO2 \n Type: ABC Sensor \n Graph: Bar'}
                //         faceNorthEast={true}
                //     />
                // }
            />
        </div>
    );
}