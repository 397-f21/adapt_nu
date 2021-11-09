import React, {useState} from "react";
import MapContainer from "./map";
import "./App.css";
import { LocationCard } from "./LocationCard";
import Button from '@mui/material/Button'; 
import {useUserState, signInWithGoogle} from './utilities/firebase.js';

const Frame = {
  title: "Adapt NU",
  subTitle: "accessiblity for all",
};

export const Banner = ({ title, subTitle }) => {

  return (<div className="App-Title">
    {useUserState()[0] ? <h2 className="signIn">You're signed in!</h2> : <Button className="signIn" variant="contained" onClick={() => signInWithGoogle()}>Sign In</Button>}
    <p></p>
    <img
      data-cy="logo"
      src="https://i.loli.net/2021/10/28/rIKFjT8m3H5c4hv.png"
      alt="AppLogo"
      style={{ width: 50, height: 45 }}
    />
    <h1 data-cy="title">{title}</h1>
    <i data-cy="subtitle">
      <p>{subTitle}</p>
    </i>
  </div>)
};

const App = () => {

  const [currentLocation, setCurrLoc] = useState({address:""})
  return (
    <div className="container">
      <Banner title={Frame.title} subTitle={Frame.subTitle} />
      <div className="body-container">
        <div className="map">
          <MapContainer setLoc={setCurrLoc} />
        </div>
        <LocationCard address={currentLocation.address} />
      </div>
    </div>
  );
};

export default App;
