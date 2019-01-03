import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import AlarmHeaderChartBar from "./Alarm/AlarmHeaderChart";

export default class extends Component {
  render() {
    const {
      title,
      subtitle = null,
      tabs = [],
    } = this.props;

    return (
      <Nav variant="tabs">
        <Nav.Item as="span" id="page-title">
          <Nav.Link as="b" disabled>{title}</Nav.Link>
        </Nav.Item>
        {
          subtitle ? (
            <Nav.Item as="span" id="page-subtitle">
              <Nav.Link as="b" disabled>{subtitle}</Nav.Link>
            </Nav.Item>
          ) : null
        }
        {tabs.map((tab, i) => (
          <Nav.Item key={i}>
            <LinkContainer to={tab.to} {...tab.props}>
              <Nav.Link>{tab.title}</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        ))}
        <Nav.Item className="ml-auto">
          <AlarmHeaderChartBar color="0,0,0"/>
        </Nav.Item>
      </Nav>
    );
  }
}
