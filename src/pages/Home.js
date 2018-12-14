import React, { Component } from 'react';
import { Card, Nav } from 'react-bootstrap';

import AlarmMarquee from "../components/AlarmMarquee/AlarmMarquee";
import AgentGrid from "../components/Agent/AgentGrid";
import AlarmTable from "../components/Alarm/AlarmTable";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], alarm: [],};

  }

  render() {
    return (
      <div id="container-wrapper" className="flex-grow-1">
        <AlarmMarquee/>
        <Card className="border-0">
          <Card.Header className="bg-white">
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item as="span" id="page-title">
                <Nav.Link as="b" disabled>{this.props.title}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <AgentGrid/>
            <AlarmTable/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
