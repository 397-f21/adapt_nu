import React from 'react';
import './locationCardStyling.css';
import {useData, setData, signInWithGoogle, useUserState} from './utilities/firebase.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const reformatAddress = (address) => address.replace(/[^A-Z0-9]+/ig, "_");

class UploadNewDataComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log('---\n', this.props.address);
      this.state = {name: '', description: ''};
    }

  
    handleSubmit() {
      console.log('---\n', this.props.address);
      alert('A location was submitted: ' + this.state.name);
      setData(this.props.address, this.state);
    }

    render() {

        return (
          <div className="upload-new-data">
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event)=>this.setState({name: event.target.value})}/>
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(event)=>this.setState({description: event.target.value})}/>
            {this.props.user ? 
                (<Button variant="contained" onClick={()=>this.handleSubmit()}>Submit</Button>) : 
                <div></div>}
          {this.props.user ? <div></div> : <SignInButton/>}
          </div>
        );
      }
}

const SignInButton = () => (
    <Button variant="outlined"
        onClick={() => signInWithGoogle()}>
      Sign In
    </Button>
  );

export const LocationCard = ({address}) => {

  const reformattedAddres = reformatAddress(address);
  const [location, loading, error] = useData('/' + reformattedAddres); 
  const [user] = useUserState();
  
  if (error) return <div className="location-container"> <h1>{error}</h1></div>;
  if (loading) return <div className="location-container"><h1>Loading the location...</h1></div>
  if (location == null || location.name == null || location.description == null) {
      
      return <div className="location-container"> 
            <h1>No data exists for {address}!</h1>
            <UploadNewDataComponent address={reformattedAddres} user={user}/>
        </div>
    }
  
  return (<div className="location-container">
                <h1 className="location-name">{location.name}</h1>
                <p className="location-address">{address}</p>
                <p className="location-desc">{location.description}</p>
            </div>
        );
};

export default LocationCard;
