import React from 'react';
import './locationCardStyling.css'
import {useData, setData, signInWithGoogle, useUserState} from './utilities/firebase.js'

const reformatAddress = (address) => address.replace(/[^A-Z0-9]+/ig, "_");

class UploadNewDataComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log('---\n', this.props.address);
      this.state = {name: '', description: ''};

      this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    handleSubmit(event) {
      console.log('---\n', this.props.address);
      alert('A location was submitted: ' + this.state.name);
      event.preventDefault();
      setData(this.props.address, this.state);
    }

    render() {

        return (
          <div><form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})} />
          </label>
            <label>
              Description:
              <input type="text" value={this.state.description} onChange={(event)=>this.setState({description: event.target.value})} />
            </label>
            {this.props.user ? <input type="submit" value="Submit" /> : <div></div>}
          </form>
          {this.props.user ? <div></div> : <SignInButton/>}
          </div>
        );
      }
}

const SignInButton = () => (
    <button className="btn btn-secondary btn-sm"
        onClick={() => signInWithGoogle()}>
      Sign In
    </button>
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
