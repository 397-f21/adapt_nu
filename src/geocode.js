import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyD4_AYzIWR9qSfvZDUSXpHLpC7vsQowkUg");

Geocode.setLocationType("ROOFTOP");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get address from latitude & longitude.
export const getLocationName = (lat, long) => {
  Geocode.fromLatLng(lat, long).then(
    (response) => {
      const address = response.results[0].formatted_address;
      return address;
    },
    (error) => {
      console.error(error);
    }
  );
};

