import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
        <h1>Navbar component</h1>
        <button className="btn btn-secondary" onClick={this.logoutClickEvent}>Log Out</button>
      </div>
    );
  }
}

export default MyNavbar;
