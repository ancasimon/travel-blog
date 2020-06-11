import React from 'react';
import PropTypes from 'prop-types';

import interestShape from '../../../helpers/propz/interestShape';

import './InterestCard.scss';

class InterestCard extends React.Component {
  static propTypes = {
    interest: interestShape.interestShape,
  }

  render() {
    const { interest } = this.props;
    return (
      <div className="InterestCard col-3">
        <h1>Single interest card {interest.name}</h1>
      </div>
    );
  }
}

export default InterestCard;
