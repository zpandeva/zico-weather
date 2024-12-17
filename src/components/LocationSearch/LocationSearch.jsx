import cities from '../../data/city.list.json';
import { useState } from "react";

export default function LocationSearch({onResult}){
  
   const [searchInput, setSearchInput] = useState('');

   const handleChange = (event) => {
      setSearchInput(event.target.value);
   };
 
   const handleKeyDown = (event) => {
     if (event.key === 'Enter') {
       searchByCityName();
     }
   };

   const handleClick = () => {
      searchByCityName();
    }; 

    const searchByCityName=()=>{
      let result = {}

      cities.forEach((city)=>{
         if(city.name === searchInput){
            result = city
         }    
      })
      if(JSON.stringify(result) === '{}'){
         result.error='No result found';
         result.location = searchInput;

      }
      onResult(result);
    }
    
   return (<div data-testid="LocationSearch">
      <div className="form-field">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Enter city name'
      />
         <span className="icon" onClick={handleClick}>🔍</span>
     </div>
     
  </div>)
}



