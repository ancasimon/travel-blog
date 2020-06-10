import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../pages/Auth/Auth';
import MyNavbar from '../shared/MyNavbar/MyNavbar';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Auth />
      </div>
    );
  }
}

export default App;
