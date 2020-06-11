import React from 'react';
import { Link } from 'react-router-dom';

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
{/* MARKUP FOR HOVER EFFECT INCLUDED IN CARD BELOW: */}
        <div className="view view-first">
          <img src={location.imageUrl} alt={location.name} className="locationImage" />
          <div className="mask">
          <h2>{location.name}, {location.country}</h2>
            {
              location.isCompleted
                ? <h4>Was AMAZING!</h4>
                : <h4>Coming SOON!</h4>
            }
            <p>{location.dates}</p>
            <Link className="btn btn-dark buttonFont" to='/locations/single/{location.id}'><i class="fas fa-binoculars"></i></Link>
          </div>
        </div>

      </div>
    );
  }
}

export default LocationCard;
