import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './HeaderBar.scss';

class HeaderBar extends Component {
  render() {
    return (
      <Navbar id="header" sticky="top">
        <Nav>
          <Nav.Link onClick={this.props.toggleSidebar} className="text-white">
            <FontAwesomeIcon icon={faBars}/>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderBar;
