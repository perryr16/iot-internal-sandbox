import React, {useEffect, useState}  from 'react';
import './index.css'
import {Link} from 'react-router-dom'

interface Props {
    num: any[]
}

export const Nav: React.FC<Props> = (props) => {
    const {num} = props;
    const [page, setPage] = useState('')



    return (
        <div className='side-nav'>
            {num.map((item) => {
                return (
                    <Link className='nav-link' to={`/${item}`}  >
                        {page == item 
                        ? <div  className='link-container' onClick={() => setPage(item)} style={{borderLeft: 'solid 1px rgb(255,255,255)', color: 'rgb(255,255,255)'}}>
                                {item}
                            </div>
                        : < div  className='link-container' onClick={() => setPage(item)} > 
                            {item} 
                            </div>
                        }

                    </Link>
                )
            })}
        </div>
    );
}