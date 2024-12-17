import React, { useState } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import LocationSearch from '../LocationSearch/LocationSearch';

export const DEGREE_METRICS = [{id:'metric', label:'C°'}, {id:'imperial', label:'F°'} ]

export default function HomePage(){
   
   const [location, setLocation] = useState({
      "id": 727012,
      "name": "Sofia",
      "state": "",
      "country": "BG",
      "coord": {
          "lon": 23.633329,
          "lat": 42.650002
      }
  });
   const[hasResult, setHasResult] = useState(true);
   const[units, setUnits] = useState('metric');
   
   const onResult = (data) => {
      
      if(data.error){
         setHasResult(false)  
      }else{
         setHasResult(true)
      }
      console.log('result',data)
      setLocation(data);
    }
   return (<div data-testid="HomePage">
      <div className='app-header'>
         <div className='search-bar'>Weather
         <div>
            <select onChange={(val)=>{
               setUnits(val.target.value)}}>
              
               {DEGREE_METRICS.map((item)=>{
                    return <option value={ item.id }>{item.label}</option>;
                  })}
            </select>
         </div>
         <LocationSearch onResult={onResult}></LocationSearch></div>
      </div>
      
      {hasResult?<CurrentWeather location={location} units={units}></CurrentWeather>:<div>No result found for <b>{location.location}</b> </div>}
   </div>)
}



