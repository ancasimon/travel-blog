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
        <h1>Past and Future Destinations</h1>
        <div className="text-center">
          <Link className="btn btn-dark btn-lg buttonFont" to='/locations/new'><i class="fas fa-globe"></i>   Add a New Destination</Link>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {buildLocations}
        </div>
      </div>
    );
  }
}

export default Locations;
