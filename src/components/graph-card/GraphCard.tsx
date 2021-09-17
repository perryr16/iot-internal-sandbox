import React from 'react';
import './index.css'

// interface Props {
//     component: any
// }

export const GraphCard: React.FC= (props) => {
    return (
        <div className='graph-card'>
            {props.children}
        </div>
    );
}