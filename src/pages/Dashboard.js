import React, { Component } from 'react';
import { Card, CardDeck, Nav } from 'react-bootstrap';
import BarWidget from '../components/Widget/BarWidget';
import PieWidget from '../components/Widget/PieWidget';
import GaugeWidget from '../components/Widget/GaugeWidget';
import InfoWidget from '../components/Widget/InfoWidget';

class Dashboard extends Component {
  render() {
    return (
      <div id="container-wrapper" className="flex-grow-1">
        <Card className="border-0">
          <Card.Header className="container-header">
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item as="span" id="page-title">
                <Nav.Link as="b" disabled>{this.props.title}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <CardDeck>
              <GaugeWidget title="Gauge Example"/>
              <BarWidget title="Bar Example"/>
              <PieWidget title="Pie Example"/>
              <InfoWidget title="Info Example"/>
            </CardDeck>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
