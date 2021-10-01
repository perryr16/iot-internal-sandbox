import React from 'react';

export const Legend = ({data, selectedItems, onChange}) => {
    return(
        <div className='legendContianer'>
            {data.map((d) => (
                <div style={{color: d.color, display: 'inline-block'}} key={d.name}>
                    <label style={{padding: '10px'}}>
                        {d.name !== 'Portfolio' && ( 
                            <input
                                type='checkbox'
                                style={{width: '20px', height: '20px'}}
                                checked={selectedItems.includes(d.name)}
                                // unchecked={unselectedItems.includes(d.name)}
                                onChange={() => onChange(d.name)}
                            />
                        )}
                        {d.name}
                    </label>
                </div>
            ))}
        </div>

    )
}