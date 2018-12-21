import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Clock from "../Clock/Clock";
import AlarmMarquee from "../AlarmMarquee/AlarmMarquee";

import './HeaderBar.scss';

class HeaderBar extends Component {
  render() {
    return (
      <>
        <Navbar id="header" sticky="top">
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link onClick={this.props.toggleSidebar}>
                <FontAwesomeIcon icon={faBars}/>
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              <Clock/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <div id="alarm-marquee-wrapper">
          <div className="alarm-marquee-left"></div>
          <AlarmMarquee/>
        </div>
      </>
    );
  }
}

export default HeaderBar;
