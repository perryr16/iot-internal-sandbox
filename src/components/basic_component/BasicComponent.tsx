import React from 'react';
import './index.css';

interface Props {

}

export const BasicComponent: React.FC<Props> = () => {
    return (
        <div>
            <h1 className='basic'>BASIC COMPONENT TEXT</h1>
        </div>
    );
}
