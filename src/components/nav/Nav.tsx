import React, {useEffect, useState}  from 'react';
import ReactDom from 'react-dom'
import './index.css'
// import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { selectPage, setPage } from '../../features/page/page-slice';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'



interface Props {
    pageNames: any[]
}

export const Nav: React.FC<Props> = (props) => {
    const {pageNames} = props;
    const [page, setPage] = useState('');

    // const page = useSelector(selectPage)
    

    useEffect(() => {
        const urlArray = window.location.href.split('/')
        let pagex = urlArray[3] == '' ? 'Home' : urlArray[3]
        setPage(pagex)
        }, [window.location.href])

    const dispatch = useDispatch()
    const handlePage = (newPage:string) => {
        dispatch(setPage(newPage))
    }

    return (
        <div className='side-nav'>
            {pageNames.map((pageName) => {
                return (
                    <Link className='nav-link' underline='none' href={`/${pageName}`}>
                        {page == pageName
                            ? <Button  variant='contained' className='link-container nb' onClick={() => handlePage(pageName)} style={{borderBottom: 'solid 1px rgb(255,255,255)', color: 'rgb(255,255,255)', backgroundColor: 'rgb(0, 44, 102)'}}>
                            {pageName}
                            </Button>
                            : < Button  variant='contained' className='link-container' onClick={() => handlePage(pageName)} > 
                            {pageName} 
                            </Button>
                        }
                    </Link>
                )
            })}
        </div>
    );
}