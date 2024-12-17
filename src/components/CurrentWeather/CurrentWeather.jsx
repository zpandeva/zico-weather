import React, { useEffect, useState } from 'react';
import { DEGREE_METRICS } from '../HomePage/HomePage';

export default function CurrentWeather({location, units}){

    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}?lat=${location.coord.lat}&lon=${location.coord.lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`, {
         
        }).then((response) => response.json()).then((jsonData) => {

            const metricLabel = DEGREE_METRICS.find((el)=>el.id === units).label;
            setTemp(`${Math.ceil(jsonData.main.temp)} ${metricLabel}`);
            const iconUrl = `${process.env.REACT_APP_ICON_URL}${jsonData.weather[0].icon}@2x.png`
            setIcon(iconUrl);
            setDescription(jsonData.weather[0].description)
        });
      }, [temp,location.coord.lat, location.coord.lon, units]);
   return (
   <div data-testid="CurrentWeather">
        <div className='current-weather-header'>
            <div>Current Wether</div><div>{location.name}</div>
        </div>
        <div className='current-weather-row'> {temp}<img alt='Current Weather Icon' src={icon}></img></div>
     <span className='current-weather-row'>{description}</span>
   </div>)
}



