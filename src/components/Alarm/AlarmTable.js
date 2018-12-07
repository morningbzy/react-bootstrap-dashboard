import React, { Component } from 'react';
import axios from 'axios';
import { Pagination, Table } from 'react-bootstrap';
import { STATES } from "../../common/constants";

class AgentGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    let url = 'http://localhost:8080/rest-api/alarms/all';
    axios.get(url)
      .then((resp) => {
        this.setState({data: resp.data})
      });
  }

  render() {
    return (
      <>
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
          {this.state.data.map(alarm => {
            const state = STATES[alarm.state];
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
        <Pagination size="sm">
          <Pagination.First/>
          <Pagination.Prev/>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis/>
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Ellipsis/>
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next/>
          <Pagination.Last/>
        </Pagination>
      </>
    );
  }
}

export default AgentGrid;
