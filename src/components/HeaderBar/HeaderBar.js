import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './HeaderBar.scss';
import Clock from "../Clock/Clock";

class HeaderBar extends Component {
  render() {
    return (
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
    );
  }
}

export default HeaderBar;
