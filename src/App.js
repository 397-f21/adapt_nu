import React, {useState} from "react";
import MapContainer from "./map";
import "./App.css";
import LocationCard from "./LocationCard";

const Frame = {
  title: "Adapt NU",
  subTitle: "accessiblity for all",
};

const Banner = ({ title, subTitle }) => (
  <div className="App-Title">
    <p></p>
    <img
      src="https://i.loli.net/2021/10/28/rIKFjT8m3H5c4hv.png"
      alt="AppLogo"
      style={{ width: 50, height: 45 }}
    />
    <h1>{title}</h1>
    <i>
      <p>{subTitle}</p>
    </i>
  </div>
);

const App = () => {

  const [currLoc, setCurrLoc] = useState({name: "Northwestern University, Evanston", desc: " "})

  return (
    <div className="container">
      <Banner title={Frame.title} subTitle={Frame.subTitle} />
      <div className="body-container">
        <div className="map">
          <MapContainer setLoc={setCurrLoc} />
        </div>
        <LocationCard name={currLoc.name} desc={currLoc.desc} />
      </div>
    </div>
  );
};

export default App;
