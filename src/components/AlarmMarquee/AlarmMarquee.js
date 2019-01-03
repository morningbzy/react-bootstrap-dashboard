import React, { Component } from 'react';

import './AlarmMarquee.scss';
import axios from "axios";
import Marquee from "./Marquee";
import { STATES, API_BASE_URL } from "../../common/constants";
import AlarmIcon from "../AlarmIcon";

class AlarmMarquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        lists: [],
      },
      listCandidate: [],
    };
  }

  componentDidMount() {
    this.get();
    this.timer = this.pool(5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  get = () => {
    let url = `${API_BASE_URL}/rest-api/alarms/all?pageSize=5`;
    url += '&page=' + parseInt(Math.random() * 6 + 1);
    axios.get(url)
      .then((resp) => {
        let {data} = this.state;
        const newList = resp.data.data.list;

        if (data.lists.length < 2) {
          data.lists.push(newList);
          this.setState({data: data})
        } else {
          this.setState({listCandidate: newList});
        }
      });
  };

  pool(timeout) {
    return setTimeout(this.get, timeout);
  }

  render() {
    const {data} = this.state;
    return (
      <Marquee id="alarm-marquee" className="alarm-marquee" fps="50" pps="100" ref={this.marqueeRef}>
        {data.lists.map(list => (
          <ul key={Math.random()} className="d-flex">
            {list.map(i =>
              <li key={i.id} className={`lr-${STATES[i.state]}`}>
                <AlarmIcon state={STATES[i.state]} height="1.2rem" width="1.2rem" innerHeight="60%" innerWidth="60%"/>
                <span>{i.ip} {i.datetime} {i.sysName} {i.desc}</span>
              </li>
            )}
          </ul>
        ))}
      </Marquee>
    );
  }
}

export default AlarmMarquee;
