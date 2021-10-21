import React from 'react';
import './index.css'

interface Props {
    child1?: React.ReactNode
    child2?: React.ReactNode
    child3?: React.ReactNode
    child4?: React.ReactNode
    child5?: React.ReactNode
    child6?: React.ReactNode

}

export const Columnx: React.FC<Props> = (props) => {
    const {child1, child2, child3, child4, child5, child6} = props;
    const style = {
        'height': `16%`,
        'border': '1px solid orange'
    }

    return (
        <div className='col'>
            <div className='row 1'>
                {child1}
            </div>
            <div className='row 2'>
                {child2}
            </div>
            <div className='row 3'>
                {child3}
            </div>
            <div className='row 4'>
                {child4}
            </div>
            <div className='row 5'>
                {child5}
            </div>
            <div className='row 6'>
                {child6}
            </div>
        </div>
    );

}


{/* {
    Array.from(Array(rows)).map((x, i) => {
        return(
            <div className='row' style={style}>
                {i+1}
            </div>
        )
    })
} */}