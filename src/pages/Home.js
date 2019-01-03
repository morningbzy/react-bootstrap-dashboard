import React, { Component } from 'react';
import { Card, Nav } from 'react-bootstrap';

import AgentGrid from "../components/Agent/AgentGrid";
import AlarmTable from "../components/Alarm/AlarmTable";
import PageHeader from "../components/PageHeader";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: this.props.title,
      }
    };
  }

  render() {
    const {header} = this.state;
    return (
      <div id="container-wrapper" className="flex-grow-1">
        <Card className="border-0">
          <Card.Header className="container-header">
            <PageHeader {...header}/>
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
