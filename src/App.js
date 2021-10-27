import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapContainer from './map'
import './App.css';

const Frame = {
  title: "Adapt NU",
  subTitle: "making nu adaptable"
};

const Banner = ({title, subTitle}) => (
  <div className="App-Title">
    <h1>{ title }</h1>
    <p>{ subTitle }</p>
  </div>
);

const App = () => {
  return (
    <div className= "container">
    <ul>
      <Banner title={ Frame.title } subTitle={ Frame.subTitle }/>
      <MapContainer/>
    </ul>
  </div>
  );
};

export default App;
