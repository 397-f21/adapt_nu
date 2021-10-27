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
    <p></p>
    <img src="https://i.loli.net/2021/10/28/rIKFjT8m3H5c4hv.png" alt="AppLogo" style={{width:50, height:45}} />
    <h1>{ title }</h1>
    <i><p>{ subTitle }</p></i>
  </div>
);

const App = () => {
  return (
    <div className = "container">
      <Banner title={ Frame.title } subTitle={ Frame.subTitle }/>
      <div className = "map">
        <MapContainer/>
      </div>
  </div>
  );
};

export default App;
