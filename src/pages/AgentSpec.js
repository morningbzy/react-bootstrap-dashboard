import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Card, CardDeck, CardGroup, Nav, Tab, Tabs } from 'react-bootstrap';

import ScrollSpy from "../components/ScrollSpy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index.es";
import { STATES } from "../common/constants";
import InfoWidget from "../components/Widget/InfoWidget";
import GaugeWidget from "../components/Widget/GaugeWidget";
import BarWidget from "../components/Widget/BarWidget";
import AlarmTable from "../components/Alarm/AlarmTable";

class Agent extends Component {
  render() {
    const {match} = this.props;
    return (
      <div id="container-wrapper" className="flex-grow-1">
        <Card className="border-0">
          <Card.Header className="container-header">
            <Nav variant="tabs">
              <Nav.Item as="span" id="page-title">
                <Nav.Link as="b" disabled>{this.props.title}</Nav.Link>
              </Nav.Item>
              <Nav.Item as="span" id="page-subtitle">
                <Nav.Link as="b" disabled>{match.params.id}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body className="agent-content">
            <ButtonToolbar>
              <ButtonGroup size="sm" className="mb-2">
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth
                                                                icon={['far', 'file-alt']}/>设备端口性能</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth
                                                                icon={['fas', 'cog']}/>设置Web配置</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['fas', 'cog']}/>端口配置</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['fas', 'cog']}/>基本配置</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['fas', 'cog']}/>SFP配置</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['far', 'calendar-alt']}/>LLDP表格</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['far', 'calendar-alt']}/>SFP表格</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['far', 'file-alt']}/>Turbo
                  Ring信息</Button>
              </ButtonGroup>
              <ButtonGroup size="sm" className="mb-2">
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth
                                                                icon={['far', 'file-alt']}/>基本信息</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth
                                                                icon={['far', 'file-alt']}/>电源信息</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['far', 'file-alt']}/>Trunk
                  Ports信息</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['far', 'file-alt']}/>VLAN
                  Static信息</Button>
                <Button variant="outline-dark"><FontAwesomeIcon tag="i" fixedWidth icon={['far', 'file-alt']}/>Trap
                  Rcv信息</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <div className="d-flex flex-row">
              <div className="main-content">
                <Card className="mb-2">
                  <ScrollSpy.Anchor id="s1"/>
                  <Card.Body className="p-2 d-flex flex-wrap">
                    {
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => (
                        <Card style={{flex: "0 0 auto",}} className="mb-1">
                          <Card.Header
                            className={`px-1 py-2 d-flex text-${STATES[parseInt(Math.random() * 3)]}`}>
                            <FontAwesomeIcon tag="i" size="lg" fixedWidth icon={['fas', 'ethernet']}/>
                          </Card.Header>
                          <Card.Body className="px-1 py-0 text-center">
                            <small>{i}</small>
                          </Card.Body>
                        </Card>))
                    }
                  </Card.Body>
                </Card>
                <Card className="mb-2 border-0">
                  <ScrollSpy.Anchor id="s2"/>
                  <Card.Body className="p-0">
                    <CardDeck>
                      <InfoWidget title="INFO"/>
                      <BarWidget title="INFO"/>
                    </CardDeck>
                  </Card.Body>
                </Card>
                <Card className="mb-2 border-0">
                  <ScrollSpy.Anchor id="s3"/>
                  <Card.Body className="p-0">
                    <CardDeck>
                      <GaugeWidget title="GGG"/>
                    </CardDeck>
                  </Card.Body>
                </Card>
                <div className="tab-container ignore-outside-card mb-2">
                  <Tab.Container defaultActiveKey="all">
                    <ScrollSpy.Anchor id="s4"/>
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="all" className="lr-primary">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="info" className="lr-success">Info</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="warn" className="lr-warning">Warn</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="error" className="lr-danger">Error</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fatal" className="lr-fatal">Fatal</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="all" className="px-0">
                        <AlarmTable variant="flush"/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="info" className="px-0">
                        <AlarmTable variant="flush" filter={{state: [1]}}/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="warn" className="px-0">
                        <AlarmTable variant="flush"/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="error" className="px-0">
                        <AlarmTable variant="flush"/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fatal" className="px-0">
                        <AlarmTable variant="flush"/>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div className="side-content">
                <div className="timeline-menu">
                  <div className="timeline-bar">
                    <em className="circle start"/>
                    <em className="circle end"/>
                  </div>
                  <ScrollSpy items={['s1', 's2', 's3', 's4']}
                             currentClassName="active"
                             componentTag="dl"
                             className="scroll-spy">
                    {['s1', 's2', 's3', 's4'].map(anchor => (
                      <dd key={anchor}>
                        <em className="pointer"/>
                        <div className="anchor-to" onClick={() => {
                          document.getElementById(anchor).scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}>{anchor}写汉字呢good
                        </div>
                      </dd>
                    ))}
                  </ScrollSpy>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Agent;
