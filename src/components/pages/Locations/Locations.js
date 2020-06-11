import React from 'react';
import { Link } from 'react-router-dom';

import LocationCard from '../../shared/LocationCard/LocationCard';

import authData from '../../../helpers/data/authData';
import locationsData from '../../../helpers/data/locationsData';

import './Locations.scss';

class Locations extends React.Component {
  state = {
    locations: [],
  }

  getLocations = () => {
    const uid = authData.getUid();
    locationsData.getLocationsByUid(uid)
      .then((locations) => this.setState({ locations }))
      .catch((err) => console.error('unable to get locations', err));
  }

  componentDidMount() {
    this.getLocations();
  }

  render() {
    const { locations } = this.state;
    const buildLocations = locations.map((location) => (
      <LocationCard key={location.id} location={location} />
    ));

    return (
      <div className="Locations">
        <h1>Locations page</h1>
        <Link className="btn btn-dark" to='/locations/new'>Create New Location</Link>
        <Link className="btn btn-primary" to='/locations/single/1234'>View a location</Link>
        <div className="d-flex flex-wrap">
          {buildLocations}
        </div>
      </div>
    );
  }
}

export default Locations;
