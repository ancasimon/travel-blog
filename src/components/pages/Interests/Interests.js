import React from 'react';
import { Link } from 'react-router-dom';

import './Interests.scss';

class Interests extends React.Component {
  render() {
    return (
      <div className="Interests">
        <h1>Interests page</h1>
        <Link to='/interests/new'>Create New Interest</Link>
        <Link to='/interests/edit/123'>Edit a Point of Interest</Link>
      </div>
    );
  }
}

export default Interests;
