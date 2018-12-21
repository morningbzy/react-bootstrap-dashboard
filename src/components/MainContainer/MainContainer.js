import React, { Component } from 'react';
import { Card, Nav, NavDropdown } from 'react-bootstrap';

import './MainContainer.scss';

class MainContainer extends Component {
  render() {
    return (
      <div id="container-wrapper" className="flex-grow-1">
        <Card className="border-0">
          {this.props.title ? (
            <Card.Header className="bg-white">
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item as="span" id="page-title">
                  <Nav.Link as="b" disabled>{this.props.title}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Action</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item eventKey="4.4">Action</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Card.Header>
          ) : null}
          <Card.Body>
            body
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MainContainer;
