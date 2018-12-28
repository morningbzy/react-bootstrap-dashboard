import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { STATES, API_BASE_URL } from "../../common/constants";
import Pagination from "../Pagination/Pagination";

class AlarmTable extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {list: []}};
  }

  componentDidMount() {
    this.paginate();
  }

  paginate = (page) => {
    let url = `${API_BASE_URL}/rest-api/alarms/all`;
    let param = 'pageSize=20&';
    param += page === undefined ? '' : 'page=' + page;
    axios.get(url + '?' + param)
      .then((resp) => {
        this.setState({data: resp.data.data});
      });
  };

  render() {
    const {data} = this.state;
    const {className = '', variant = ''} = this.props;
    return (
      <>
        <Table hover size="sm" className={"lr-alarm-table " + className} variant={variant}>
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
          {data.list.map(alarm => {
            const state = STATES[alarm.state];
            return (
              <tr key={alarm.id} className={`-table-${state} lr-${state}`}>
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
        <Pagination size="sm" data={data} handlePaginate={this.paginate}/>
      </>
    );
  }
}

export default AlarmTable;
