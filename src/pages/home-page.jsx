import { useEffect, useState } from "react"
import React from 'react'
import { Async } from "../utils/Async"
import { Option } from '../utils/Option'
import { err } from "../utils/err"
import { compose } from '../utils/compose'
import { toString, split, slice, join, tap } from "../utils/helpers"
import { AsteroidItem } from '../components/AsteroidItem'
import { Fade, Bounce } from 'react-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AsteroidDiameter } from "../components/AsteroidDiameter"

const NASA_API_KEY = 'AdlPfqH3XwQd3hJfABoUg8sIhLiUfaF3cf3wzVni'

const makeNEOsRequest = (startDate, endDate) =>
    Async.http(
        'GET', 
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`
    ).map(x => x.near_earth_objects[getNEODateString(new Date())])

const monthToNum = month =>
    month === 'Jan' ? '01'
  : month === 'Feb' ? '02'
  : month === 'Mar' ? '03'
  : month === 'Apr' ? '04'
  : month === 'May' ? '05'
  : month === 'Jun' ? '06'
  : month === 'Jul' ? '07'
  : month === 'Aug' ? '08'
  : month === 'Sep' ? '09'
  : month === 'Oct' ? '10'
  : month === 'Nov' ? '11'
  : month === 'Dec' ? '12'
  : /*else*/          err(`Unexpected string ${month} passed to fn:monthToNum. Expected 3 letter month prefix (ie. 'Aug').`)

const reorderDate = ([mon, day, yr]) => [yr, monthToNum(mon), day]

const getNEODateString = date => compose(
    join('-'), 
    reorderDate, 
    split(' '), 
    slice(4, 15), 
    toString
)(date)

const getCloseApproachData = data => ({
    date: data.close_approach_date_full,
    astro_miss: data.miss_distance.astronomical,
    lunar_miss: data.miss_distance.lunar,
    km_miss: data.miss_distance.kilometers,
    orbiting: data.orbiting_body,
    relativeVelocity: data.relative_velocity.kilometers_per_hour,
})

const getNEOAdjusted = data => { 
    console.log(data)   
    return {
    magnitude: data.absolute_magnitude_h,
    approachData: getCloseApproachData(data.close_approach_data[0]),
    diameter: {
        min: data.estimated_diameter.meters.estimated_diameter_min,
        max: data.estimated_diameter.meters.estimated_diameter_max
    },
    name: data.name,
    risk: data.is_potentially_hazardous_asteroid,
    isSentry: data.is_sentry_object,
    jplUrl: data.nasa_jpl_url,
}}

// onErr :: Error -> JSX
const onErr = error => (
    <>
        <div className='404-div'>
            <h1 className='404-h'>404 Not Found</h1>
            <p>{error}</p>
        </div>
    </>
)

//onSuccess :: NEOData -> JSX
const onSuccess = data => (
    <>
        <div class='main-img'>
            <div className="main-img-shadowed">
                <Fade left cascade>
                    <FontAwesomeIcon icon={faRocket} size="6x"/>
                    <h1 style={{fontSize: '2em'}}>Today's Near Earth Objects</h1>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Bounce>
                            <FontAwesomeIcon icon={faChevronDown} size="2x" />
                        </Bounce>
                    </div>
                </Fade>
            </div>
        </div>
        <div className='neo-container'>
            { data.map(x => x.is_potentially_hazardous_asteroid
                ? (
                    <>
                        <div className='asteroid-data-container'>
                            <Bounce left>
                                <AsteroidItem key={x.name} {...getNEOAdjusted(x)}/>
                            </Bounce>
                            <Bounce right>
                                <AsteroidDiameter {...getNEOAdjusted(x)}/>
                            </Bounce>
                        </div>
                    </>)
                : (
                    <>
                        <div className='asteroid-data-container'>
                            <Fade left>
                                <AsteroidItem key={x.name} {...getNEOAdjusted(x)}/>
                            </Fade>
                            <Fade right>
                                <AsteroidDiameter {...getNEOAdjusted(x)} />
                            </Fade>
                        </div>
                    </>)) }
        </div>
    </>
)

//Loading :: IO -> JSX
const Loading = () => <div className='home-load'><h1>{'{ Loading... }'}</h1></div>

//HomePage :: IO -> JSX
export const HomePage = () => {
    const date = getNEODateString(new Date())
    const [data, setData]= useState(Option.None())

    useEffect(() => {
        makeNEOsRequest(date, date).fork(
            onErr,
            compose(onSuccess, tap(setData))
        )
    }, [date])

    return Option.isNone(data) ? Loading() : onSuccess(data)
}