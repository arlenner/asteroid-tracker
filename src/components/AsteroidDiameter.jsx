import React from 'react'

const SIZE = 800

const avg = (min, max) => (min + max)/2

const getGradient = (min, max) => `
    radial-gradient(
        red 0% ${(min/SIZE)*100}%, 
        yellow ${(min/SIZE)*100}% ${(avg(min, max)/SIZE)*100}%,
        blue ${(avg(min, max)/SIZE)*100}% ${(max/SIZE)*100}%, 
        transparent ${(max/SIZE)*100}% 100%)`

export const AsteroidDiameter = ({diameter}) => (
    <>
        <div className='asteroid-diameter-chart'>
            <div style={{
                background: getGradient(diameter.min, diameter.max),
                width: '13vw',
                height: '13vw',
                ['border-radius']: '.25em'
            }}></div>
        </div>
    </>
)