
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getLocationName } from './geocode';
import locationData from './data/locations.json';


const MapContainer = ({setLoc}) => {

  const mapStyles = {
    height: "88vh",
    width: "60%"
  };

  const defaultCenter = {
    lat: 42.055984, lng: -87.675171
  };

  return (
     <LoadScript
       googleMapsApiKey= 'AIzaSyD4_AYzIWR9qSfvZDUSXpHLpC7vsQowkUg'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={16}
          center={defaultCenter}
          onClick={(e) => {
              const location = getLocationName(e.latLng.lat(), e.latLng.lng());
              console.log(location);
              setLoc({
                      name: location, 
                      desc: "dummy description"
                    })
            }
          }
        > 
        {locationData.map((location)=>
        <Marker position={{lat: location.location.lat, lng: location.location.lng}}/>)}
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;
