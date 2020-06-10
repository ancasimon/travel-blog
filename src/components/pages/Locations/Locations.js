import React from 'react';
import { Link } from 'react-router-dom';

import './Locations.scss';

class Locations extends React.Component {
  render() {
    return (
      <div className="Locations">
        <h1>Locations page</h1>
        <Link className="btn btn-dark" to='/locations/new'>Create New Location</Link>
        <Link className="btn btn-primary" to='/locations/single/1234'>View a location</Link>
      </div>
    );
  }
}

export default Locations;
