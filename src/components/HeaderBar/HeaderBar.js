import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Clock from "../Clock/Clock";
import AlarmMarquee from "../AlarmMarquee/AlarmMarquee";

import store from '../../redux/store';

import './HeaderBar.scss';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const username = store.getState().auth.username;
    return (
      <>
        <Navbar id="header" sticky="top">
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link onClick={this.props.toggleSidebar}>
                <FontAwesomeIcon icon={faBars}/>
              </Nav.Link>
              <Nav.Link onClick={this.props.toggleRightSidebar}>
                <FontAwesomeIcon icon={faBars}/>
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              <Clock/>
            </Navbar.Text>
            {localStorage.getItem("username") ? (
              <NavDropdown title={username} size="sm" alignRight>
                <NavDropdown.Item onClick={this.props.handleSignout}>Signout</NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Navbar.Collapse>
        </Navbar>
        <div id="alarm-marquee-wrapper">
          <div className="alarm-marquee-left"/>
          <AlarmMarquee/>
          <div className="alarm-marquee-right"/>
        </div>
      </>
    );
  }
}

export default HeaderBar;
