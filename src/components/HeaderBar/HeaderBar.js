import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from '../../redux/store';
import $ from 'jquery';

import Clock from "../Clock/Clock";
import AlarmMarquee from "../AlarmMarquee/AlarmMarquee";

import './HeaderBar.scss';
import AlarmHeaderChartBar from "../Alarm/AlarmHeaderChart";

class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar = () => {
    $('body').toggleClass('sidebar-collapsed');
  };

  toggleRightSidebar = () => {
    $('body').toggleClass('right-sidebar-collapsed');
  };

  render() {
    const username = store.getState().auth.username;
    return (
      <>
        <Navbar id="header" sticky="top">
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link onClick={this.toggleSidebar}>
                <FontAwesomeIcon icon={['fas', 'bars']}/>
              </Nav.Link>
            </Nav>
            <Nav>
              <AlarmHeaderChartBar color="255,255,255" className="text-white"/>
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
