import React from 'react';

import interestShape from '../../../helpers/propz/interestShape';

import './InterestCard.scss';

class InterestCard extends React.Component {
  static propTypes = {
    interest: interestShape.interestShape,
  }

  render() {
    const { interest } = this.props;
    return (
      <div className="InterestCard">
        <h1>Single interest card for {interest.name}</h1>
      </div>
    );
  }
}

export default InterestCard;
