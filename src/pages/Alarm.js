import React, { Component } from 'react';
import { Card, CardDeck, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import AlarmTable from "../components/Alarm/AlarmTable";


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
            <CardDeck className="mb-4">
              <Card className="text-white bg-success">
                <Card.Body className="py-2 px-4">
                  <Card.Title>1009</Card.Title>
                  <Card.Subtitle>84%</Card.Subtitle>
                  <Card.Text>Info alarms</Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-white bg-warning">
                <Card.Body className="py-2 px-4">
                  <Card.Title>1009</Card.Title>
                  <Card.Subtitle>84%</Card.Subtitle>
                  <Card.Text>Info alarms</Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-white bg-danger">
                <Card.Body className="py-2 px-4">
                  <Card.Title>1009</Card.Title>
                  <Card.Subtitle>84%</Card.Subtitle>
                  <Card.Text>Info alarms</Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-white" style={{backgroundColor: "#6f42c1",}}>
                <Card.Body className="py-2 px-4">
                  <Card.Title>1009</Card.Title>
                  <Card.Subtitle>84%</Card.Subtitle>
                  <Card.Text>Info alarms</Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>

            <AlarmTable/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Alarm;
