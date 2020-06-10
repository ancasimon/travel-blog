import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import EditInterest from '../components/pages/EditInterest/EditInterest';
import Interests from '../components/pages/Interests/Interests';
import Locations from '../components/pages/Locations/Locations';
import NewInterest from '../components/pages/NewInterest/NewInterest';
import NewLocation from '../components/pages/NewLocation/NewLocation';
import SingleLocation from '../components/pages/SingleLocation/SingleLocation';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/locations', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};


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
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} />
            <div className="container">
              <div className="row">
                <Switch>
                  <PrivateRoute path='/locations/new' component={NewLocation} authed={authed} />
                  <PrivateRoute path='/locations/single/:locationId' component={SingleLocation} authed={authed} />
                  <PrivateRoute path='/locations' component={Locations} authed={authed} />
                  <PrivateRoute path='/interests/edit/:interestId' component={EditInterest} authed={authed} />
                  <PrivateRoute path='/interests/new' component={NewInterest} authed={authed} />
                  <PrivateRoute path='/interests' component={Interests} authed={authed} />

                  <PublicRoute path='/auth' component={Auth} authed={authed} />

                  <Redirect from="*" to='/locations' />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
