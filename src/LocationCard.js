import React from 'react';
import './locationCardStyling.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const LocationCard = ({name, desc}) => {
      const [input, setInput] = useState('');
      const handleOnClick=(e)=> {
        console.log(input);
        e.preventDefault();
      }

    return (
        <div className="location-container">
            <div>
                <h1 className="location-name">{name}</h1>
                <p className="location-desc">{desc}</p>
            </div>  
            <input value={input} onInput={e => setInput(e.target.value)} />
            <Button type="button" className="btn btn-light btn-sm" onClick = {handleOnClick}>add desciption</Button>
        </div>
            
    )
}
    
export default LocationCard;
