import React from 'react'
import { DistanceMeter } from './DistanceMeter'
import { Fade } from 'react-reveal'

export const AsteroidItem = ({name, risk, diameter, approachData}) => (
    <>
        <div className={risk ? 'asteroid-item-hazard' : 'asteroid-item'}>
            <Fade left big><h2 className='asteroid-name'>{name}
            {risk ? <div className='potential-hazard'>POTENTIAL HAZARD</div>
                  : <></>}</h2></Fade>
            <div className='asteroid-item-prop'>
                <h4 className='asteroid-propname'>Diameter: </h4>
                <h4>{diameter.min.toFixed(2)}-{diameter.max.toFixed(2)}m</h4>
            </div>
            <div className='asteroid-item-prop'>
                <h4 className='asteroid-propname'>Distance: </h4>
                <h4>{Number.parseFloat(approachData.km_miss).toFixed(2)}km</h4>
            </div>
            <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <h6>near</h6>
                <h6>far</h6>
            </div>
            <DistanceMeter 
                value={approachData.km_miss} 
                max="80000000"/>
        </div>
    </>
)