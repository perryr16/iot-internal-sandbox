import React, {forwardRef} from 'react';

// use overlay as a wrapper for components that need mouse events to be handled

export const Overlay = forwardRef(({width, height, children}, ref) => (
    <g>
        {children}
        <rect ref={ref} width={width} height={height} opacity={0} />
    </g>
))