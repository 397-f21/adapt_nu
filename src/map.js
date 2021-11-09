
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyD4_AYzIWR9qSfvZDUSXpHLpC7vsQowkUg");

const MapContainer = ({setLoc}) => {

  const mapStyles = {
    height: "88vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 42.055984, lng: -87.675171
  };

  return (
    <div data-cy="map">
     <LoadScript
       googleMapsApiKey= 'AIzaSyD4_AYzIWR9qSfvZDUSXpHLpC7vsQowkUg'>
        <GoogleMap
          className="googleMap"
          mapContainerStyle={mapStyles}
          zoom={16}
          center={defaultCenter}
          onClick={(e) => {
            Geocode.fromLatLng(e.latLng.lat(), e.latLng.lng()).then(
            (response) => {const address = response.results[0].formatted_address;
              setLoc({
                      address : address
                    })
              },
              (error) => {
                console.error(error);
              }
            )
            } 
          }
        />
     </LoadScript></div>
  )
}

export default MapContainer;
