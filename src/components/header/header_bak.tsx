import React from 'react';
import './index.css';
import logo from '../../images/devetry_logo.png'


interface Props {

}

export const Header: React.FC<Props> = () => {
    return (

            <div className='header grid-3'>
                <div className='header-left'>
                    <img src={logo} alt="logo" className='devetry-logo'/>
                </div>
                <div className='header-center'>
                    
                </div>
                <div className='header-right'>
                    <p className='time'>10:13:21 AM</p>
                </div>
                <div className='bottom'>
                    <p className='bold blue left-align'>IoT Embedded - Office Meters</p>
                </div>
            </div>

    );
}