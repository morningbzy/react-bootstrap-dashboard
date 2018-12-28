import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import axios from "axios";
import { API_BASE_URL } from "../../common/constants";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: moment(),
    };
    setInterval(this.tik, 1000);
    setInterval(this.update, 30000);
  }

  update = () => {
    let url = `${API_BASE_URL}/rest-api/datetime`;
    axios.get(url)
      .then((resp) => {
        // this.setState({datetime: moment(resp.data)})
      });
  };

  tik = () => {
    // this.setState({datetime: this.state.datetime.add(1, 'seconds')});
  };

  render() {
    return (
      <span><FontAwesomeIcon icon={['far', 'clock']}/> {this.state.datetime.format('YYYY-MM-DD HH:mm:ss')}</span>
    );
  }
}

export default Clock;
