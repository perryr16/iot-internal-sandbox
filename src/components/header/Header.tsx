import React from 'react';
import './index.css';
import logo from '../../images/devetry_logo.png'
import {Nav} from '../index'
import {useEffect, useState} from 'react'



interface Props {

}

export const Header: React.FC<Props> = () => {
    const [date, setDate]:any = useState()
    const [time, setTime]:any = useState()

    const timeNow = () => {
        const dateRaw = (new Date()).toLocaleString('en-US', {hour12: true}).split(',')
        setDate(dateRaw[0])
        setTime(dateRaw[1])
    }


    const intervalMS = 1000
    useEffect(() => {
        const interval = setInterval(() => {
            (timeNow())
        }, intervalMS)
        return () => clearInterval(interval)
    },[])

    return (

        <div className='header'>
            <img src={logo} alt="logo" className='devetry-logo'/>
            <p className='time'>{time}</p>
            <p className='d-blue title'>IoT Embedded - Office Meters</p>
            <Nav pageNames={['Home', 'Bar', 'Line', 'd3Line', 'Pie', 'Gauge', 'LineNivo']}/>
        </div>

    );
}