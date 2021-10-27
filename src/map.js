
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const MapContainer = () => {

  const mapStyles = {
    height: "90vh",
    width: "50%"};

  const defaultCenter = {
    lat: 42.055984, lng: -87.675171
  }

  return (
     <LoadScript
       googleMapsApiKey= 'AIzaSyD4_AYzIWR9qSfvZDUSXpHLpC7vsQowkUg'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;
