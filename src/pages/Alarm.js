import React, {Component} from 'react';
import {Card, CardDeck, Nav} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

import AlarmTable from "../components/Alarm/AlarmTable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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
                <Card.Body className="p-2">
                  <div
                    className="d-flex justify-content-between font-weight-light">
                    <div className="d-flex flex-column align-items-center">
                      <i className="fa-layers fa-fw"
                         style={{height: 48, width: 48,}}>
                        <FontAwesomeIcon tag="i" fixedWidth icon="circle"
                                         color="rgba(255,255,255,0.2)"
                                         style={{height: 48, width: 48,}}/>
                        <FontAwesomeIcon icon={['fas', 'info']}
                                         style={{height: 28, width: 28,}}/>
                      </i>
                      <p className="mt-2 mb-0">Info</p>
                    </div>
                    <div
                      className="text-right d-flex flex-column justify-content-between">
                      <h2 className="font-weight-light">1009</h2>
                      <p className="mb-0">84%</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="text-white bg-warning">
                <Card.Body className="p-2">
                  <div
                    className="d-flex justify-content-between font-weight-light">
                    <div className="d-flex flex-column align-items-center">
                      <i className="fa-layers fa-fw"
                         style={{height: 48, width: 48,}}>
                        <FontAwesomeIcon tag="i" fixedWidth icon="circle"
                                         color="rgba(0,0,0,0.2)"
                                         style={{height: 48, width: 48,}}/>
                        <FontAwesomeIcon icon={['fas', 'exclamation']}
                                         style={{height: 28, width: 28,}}/>
                      </i>
                      <p className="mt-2 mb-0">Warn</p>
                    </div>
                    <div
                      className="text-right d-flex flex-column justify-content-between">
                      <h2 className="font-weight-light">1009</h2>
                      <p className="mb-0">84%</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="text-white bg-danger">
                <Card.Body className="p-2">
                  <div
                    className="d-flex justify-content-between font-weight-light">
                    <div className="d-flex flex-column align-items-center">
                      <i className="fa-layers fa-fw"
                         style={{height: 48, width: 48,}}>
                        <FontAwesomeIcon tag="i" fixedWidth icon="circle"
                                         color="rgba(255,255,255,0.2)"
                                         style={{height: 48, width: 48,}}/>
                        <FontAwesomeIcon icon={['fas', 'times']}
                                         style={{height: 28, width: 28,}}/>
                      </i>
                      <p className="mt-2 mb-0">Error</p>
                    </div>
                    <div
                      className="text-right d-flex flex-column justify-content-between">
                      <h2 className="font-weight-light">1009</h2>
                      <p className="mb-0">84%</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="text-white bg-fatal"
                    style={{backgroundColor: "#6f42c1",}}>
                <Card.Body className="p-2">
                  <div
                    className="d-flex justify-content-between font-weight-light">
                    <div className="d-flex flex-column align-items-center">
                      <i className="fa-layers fa-fw"
                         style={{height: 48, width: 48,}}>
                        <FontAwesomeIcon tag="i" fixedWidth icon="circle"
                                         color="rgba(255,255,255,0.2)"
                                         style={{height: 48, width: 48,}}/>
                        <FontAwesomeIcon icon={['fas', 'skull']}
                                         style={{height: 28, width: 28,}}/>
                      </i>
                      <p className="mt-2 mb-0">Fatal</p>
                    </div>
                    <div
                      className="text-right d-flex flex-column justify-content-between">
                      <h2 className="font-weight-light">1009</h2>
                      <p className="mb-0">84%</p>
                    </div>
                  </div>
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
