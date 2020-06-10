import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import { NavLink as RRNavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import PropTypes from 'prop-types';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authed } = this.props;
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/locations/'>Locations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/interests/'>Interests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="pointerHand" onClick={this.logoutClickEvent}>Log Out</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className="ml-auto" navbar></Nav>;
    };

    return (
      <div className="MyNavbar">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TravelBlog</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          { buildNavbar() }
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
