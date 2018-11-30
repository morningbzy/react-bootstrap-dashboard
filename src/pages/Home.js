import React, { Component } from 'react';
import axios from 'axios';
import { Card, Nav, Table } from 'react-bootstrap';

import './page.scss';
import AlarmMarquee from "../components/AlarmMarquee/AlarmMarquee";
import AgentGrid from "../components/Agent/AgentGrid";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], alarm: [],};

    let url = 'http://localhost:8080/rest-api/alarms/all';
    axios.get(url)
      .then((resp) => {
        this.setState({alarm: resp.data})
      });

  }

  randomState() {
    const states = ['success', 'warning', 'danger', 'fatal'];
    let r = parseInt(Math.random() * 4);
    return states[r];
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
            <Table hover size="sm" className="lr-alarm-table">
              <thead>
              <tr>
                <th>#</th>
                <th>IP</th>
                <th>SysName</th>
                <th>Datetime</th>
                <th>Desc</th>
              </tr>
              </thead>
              <tbody>
              {this.state.alarm.map(alarm => {
                const state = this.randomState();
                return (
                  <tr key={alarm.id} className={"table-" + state + " lr-" + state}>
                    <td>{alarm.id}</td>
                    <td>{alarm.ip}</td>
                    <td>{alarm.sysName}</td>
                    <td>{alarm.datetime}</td>
                    <td>{alarm.desc}</td>
                  </tr>
                );
              })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
