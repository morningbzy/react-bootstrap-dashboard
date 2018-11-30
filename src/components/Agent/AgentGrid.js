import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, CardDeck, Media, Table } from 'react-bootstrap';
import { genImg } from '../../utils';

class AgentGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};

    let url = 'http://localhost:8080/rest-api/agents/all';
    axios.get(url)
      .then((resp) => {
        this.setState({data: resp.data})
      });

  }

  randomState() {
    const states = ['success', 'warning', 'danger', 'fatal'];
    let r = parseInt(Math.random() * 4);
    return states[r];
  }

  render() {
    return (
      <CardDeck>
        {this.state.data.map(agent => (
          <Card key={agent.id} className={"lr-agent-card lr-" + this.randomState()}>
            <Card.Header as="b">
              <Link to={"/agent/" + agent.ip}>{agent.ip}</Link>
            </Card.Header>
            <Card.Body>
              <Media>
                <img alt="" height={90} width={90} className="p-0 m-0" src={genImg(90, 90)}/>
                <Media.Body>
                  <Table size="sm" style={{height: "90px"}}>
                    <tbody>
                    <tr>
                      <td><b>SysName</b></td>
                      <td>MAYSH</td>
                    </tr>
                    <tr>
                      <td><b>IP</b></td>
                      <td>{agent.ip}</td>
                    </tr>
                    <tr>
                      <td><b>SysDesc</b></td>
                      <td title="MAYSH Switch if the name is long, omit it.">MAYSH Switch if the name is long, omit
                        it.
                      </td>
                    </tr>
                    <tr>
                      <td><b>SysUpTime</b></td>
                      <td>1028377</td>
                    </tr>
                    </tbody>
                  </Table>
                </Media.Body>
              </Media>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    );
  }
}

export default AgentGrid;
