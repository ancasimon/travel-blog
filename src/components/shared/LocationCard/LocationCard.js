import React from 'react';

import locationShape from '../../../helpers/propz/locationShape';

import './LocationCard.scss';

class LocationCard extends React.Component {
  static propTypes = {
    location: locationShape.locationShape,
  }

  render() {
    const { location } = this.props;

    return (
      <div className="LocationCard">
        <h1>{location.name}</h1>
      </div>
    );
  }
}

export default LocationCard;
