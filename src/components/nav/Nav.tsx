import React, {useEffect, useState}  from 'react';
import ReactDom from 'react-dom'
import './index.css'
// import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { selectPage, setPage } from '../../features/page/page-slice';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'



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
                        <Link className='nav-link' underline='none' href={`/${item}`}>
                                {page.page == item 
                                    ? <Button  variant='contained' className='link-container' onClick={() => handlePage(item)} style={{borderBottom: 'solid 10px rgb(255,255,255)', color: 'rgb(255,255,255)'}}>
                                    {item}
                                    </Button>
                                    : < Button  variant='contained' className='link-container' onClick={() => handlePage(item)} > 
                                    {item} 
                                    </Button>
                                }


                        </Link>
                )
            })}
        </div>
    );
}