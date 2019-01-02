import React, { Component } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import AlarmTable from "../components/Alarm/AlarmTable";
import AlarmBriefChartBar from "../components/Alarm/AlarmBriefChart";


class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], alarm: [],};
  }

  render() {
    return (
      <div id="container-wrapper" className="flex-grow-1">
        <Card className="border-0">
          <Card.Header className="container-header">
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item as="span" id="page-title">
                <Nav.Link as="b" disabled>{this.props.title}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to={"/alarmmgr/current"} exact>
                  <Nav.Link>All</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to={"/alarmmgr/history"} exact>
                  <Nav.Link>History</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <AlarmBriefChartBar className="mb-4"/>
            <AlarmTable/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Alarm;
