
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { getLocationName } from './geocode';


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
        />
     </LoadScript>
  )
}

export default MapContainer;
