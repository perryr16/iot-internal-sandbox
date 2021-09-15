import React from 'react';
import './index.css';
import logo from '../../images/devetry_logo.png'
import {Nav} from '../index'



interface Props {

}

export const Header: React.FC<Props> = () => {
    return (

        <div className='header'>
            <img src={logo} alt="logo" className='devetry-logo'/>
            <p className='time'>10:13:21 AM</p>
            <p className='d-blue title'>IoT Embedded - Office Meters</p>
            <Nav pageName={['Home', 'Bar', 'Line', 'Pie', 'Gauge']}/>
        </div>

    );
}