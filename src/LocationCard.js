import React, {useState} from 'react';
import './locationCardStyling.css';
import {useData, setData, signInWithGoogle, useUserState, editData} from './utilities/firebase.js';
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
            {this.props.user && <Button variant="contained" onClick={()=>this.handleSubmit()}>Submit</Button>}
          </div>
        );
      }
}

export const SignInButton = () => (
    <Button variant="outlined"
        onClick={() => signInWithGoogle()}>
      Sign In
    </Button>
  );

const EditButton = ({setIsEditing}) => (
    <Button variant="outlined" 
            onClick={() => setIsEditing(true)} >
    Edit
    </Button>
)
export const LocationCard = ({address}) => {
  const reformattedAddress = reformatAddress(address);
  const [location, loading, error] = useData('/' + reformattedAddress);
  console.log(address);
  const [user] = useUserState();

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [isEditing, setIsEditing] = useState(false);
  const [currentEdit, setCurrentEdit] = useState('')

  // console.log(query)

  const handleEdit = (setIsEditing) => {
    setIsEditing(false);
    editData(reformattedAddress, {description: currentEdit});
    alert('A location was submitted: ' + currentEdit);
  }

  if (error) return <div className="location-container"> <h1>{error}</h1></div>;
  if (loading) return <div className="location-container"><h1>Loading the location...</h1></div>
  if (location == null || location.name == null || location.description == null) {

      return <div data-cy="LocationCard" className="location-container">
            <h1>{address}</h1>
            <p>No data exists for {address}!</p>
            <UploadNewDataComponent address={reformattedAddress} user={user}/>
        </div>
    }

  if (location.description === ""){
    location.description = "No Data"
  }

  return (<div data-cy="LocationCard" className="location-container">
                <h1 className="location-name">{location.name}</h1>
                <p className="location-address">{address}</p>
                {!isEditing && <p className="location-desc">{location.description}</p>}
                {isEditing && <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(event)=> setCurrentEdit(event.target.value)} defaultValue={location.description} /> }
                {user && !isEditing && <EditButton data-testid="editButton" setIsEditing={setIsEditing} />}
                {isEditing && <Button data-testid="submitButton" variant="contained" onClick={()=> handleEdit(setIsEditing)}>Submit</Button>}
                {!user && <SignInButton/>}
            </div>
        );
};

export default LocationCard;
