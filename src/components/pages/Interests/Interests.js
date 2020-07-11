import React from 'react';
import { Link } from 'react-router-dom';

import InterestCard from '../../shared/InterestCard/InterestCard';

import authData from '../../../helpers/data/authData';
import interestsData from '../../../helpers/data/interestsData';

import './Interests.scss';

class Interests extends React.Component {
  state = {
    interests: [],
  }

  getInterests = () => {
    const { uid } = authData.getUid();
    interestsData.getInterestsByUid(uid)
      .then((interests) => this.setState({ interests }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getInterests();
  }

  render() {
    const { interests } = this.state;
    const buildInterestCards = interests.map((interest) => (
        <InterestCard key={interest.id} interest={interest} />
    ));
    return (
      <div className="Interests">
        <h1 className="text-center">Points of Interest</h1>
        <Link to='/interests/new'>Create New Interest</Link>
        <Link to='/interests/edit/123'>Edit a Point of Interest</Link>
        <div className="d-flex flex-wrap">
          {buildInterestCards}
        </div>
      </div>
    );
  }
}

export default Interests;
