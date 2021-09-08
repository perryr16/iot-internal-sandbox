import React from 'react';

interface Props {
    text: string
}

export const GraphCard: React.FC<Props> = (props) => {
    const {text} = props
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}