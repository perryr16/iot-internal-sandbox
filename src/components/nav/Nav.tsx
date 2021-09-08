import React, {useEffect, useState}  from 'react';
import './index.css'
import {Link} from 'react-router-dom'

interface Props {
    num: any[]
}

export const Nav: React.FC<Props> = (props) => {
    const {num} = props;
    const alertBox = () => {
        alert("ALERT!")
    }



    return (
        <div className='side-nav'>
            {/* <p>{num}</p> */}
            {num.map((item) => {
                return (
                    <Link className='nav-link' to={`/${item}`}  >
                        <div className='link-container'>
                            {item}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}