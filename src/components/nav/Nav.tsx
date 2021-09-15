import React, {useEffect, useState}  from 'react';
import './index.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { selectPage, setPage } from '../../features/page/page-slice';

interface Props {
    pageName: any[]
}

export const Nav: React.FC<Props> = (props) => {
    const {pageName} = props;

    const page = useSelector(selectPage)
    
    const dispatch = useDispatch()
    const handlePage = (newPage:string) => {
        dispatch(setPage(newPage))
    }



    return (
        <div className='side-nav'>
            {pageName.map((item) => {
                return (
                    <Link className='nav-link' to={`/${item}`}  >
                        {page.page == item 
                        ? <div  className='link-container' onClick={() => handlePage(item)} style={{borderLeft: 'solid 1px rgb(255,255,255)', color: 'rgb(255,255,255)'}}>
                                {item}
                            </div>
                        : < div  className='link-container' onClick={() => handlePage(item)} > 
                            {item} 
                            </div>
                        }

                    </Link>
                )
            })}
        </div>
    );
}