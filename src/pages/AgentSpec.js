import React, { Component } from 'react';
import { Card, Nav } from 'react-bootstrap';

import ScrollSpy from "../components/ScrollSpy";

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
            <div className="main-content">
              <Card>
                <ScrollSpy.Anchor id="s1"/>
                <Card.Body className="p-2">.</Card.Body>
              </Card>
              <Card style={{backgroundColor: "rgba(128, 0, 0, .1)"}}>
                <ScrollSpy.Anchor id="s2"/>
                <Card.Body>
                  <p>s2</p>
                  <p>s2</p>
                  <p>s2</p>
                  <p>s2</p>
                </Card.Body>
              </Card>
              <Card style={{backgroundColor: "rgba(0, 128, 0, .1)"}}>
                <ScrollSpy.Anchor id="s3"/>
                <Card.Body>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                  <p>s3</p>
                </Card.Body>
              </Card>
              <Card style={{backgroundColor: "rgba(0, 0, 128, .1)"}}>
                <ScrollSpy.Anchor id="s4"/>
                <Card.Body>
                  <p>s4</p>
                  <p>s4</p>
                  <p>s4</p>
                  <p>s4</p>
                  <p>s4</p>
                </Card.Body>
              </Card>
              <Card style={{backgroundColor: "rgba(0, 0, 128, .1)"}}>
                <ScrollSpy.Anchor id="s5"/>
                <Card.Body>
                  <p>s4</p>
                  <p>s4</p>
                  <p>s4</p>
                  <p>s4</p>
                  <p>s4</p>
                  <p>s4</p>
                  <p>s4</p>
                </Card.Body>
              </Card>
            </div>
            <div className="side-content">
              <div className="timeline-menu">
                <div className="timeline-bar">
                  <em className="circle start"/>
                  <em className="circle end"/>
                </div>
                <ScrollSpy items={['s1', 's2', 's3', 's4', 's5']}
                           currentClassName="active"
                           componentTag="dl"
                           className="scroll-spy">
                  {['s1', 's2', 's3', 's4', 's5'].map(anchor => (
                    <dd key={anchor}>
                      <em className="pointer"/>
                      <div className="anchor-to" onClick={() => {
                        document.getElementById(anchor).scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                          inline: "start",
                        });
                      }}>写汉字呢good
                      </div>
                    </dd>
                  ))}
                </ScrollSpy>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Agent;
