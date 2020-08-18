import React from 'react'

const getColor = prog => `rgb(${255-(prog*255)},${prog*255},0)`

export const DistanceMeter = ({value, max}) => (
    <>
        <div className='distance-meter-bg'>
            <div style={{
                background: getColor(value/max),
                width: `${(value/max) * 100}%`,
                height: '.6em',
                zIndex: 2
            }}>
            </div>
        </div>
    </>
)