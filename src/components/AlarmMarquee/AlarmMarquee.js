import React, { Component } from 'react';

import './AlarmMarquee.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faTimesCircle, faExclamationTriangle, faSkull } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Marquee from "./Marquee";

class AlarmMarquee extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};

    let url = 'http://localhost:8080/rest-api/accounts/all';
    axios.get(url)
      .then((resp) => {
        this.setState({data: resp.data})
      });
  }

  render() {
    return (
      <Marquee id="alarm-marquee" fps="30">
        <ul className="d-flex">
          {this.state.data.map(i => (<li key={i.id}><FontAwesomeIcon icon={faInfoCircle} className="text-success" fixedWidth/> {i.name}</li>))}
          <li><FontAwesomeIcon icon={faInfoCircle} className="text-success" fixedWidth/> bbb</li>
          <li><FontAwesomeIcon icon={faTimesCircle} className="text-danger" fixedWidth/> aaa</li>
          <li><FontAwesomeIcon icon={faExclamationTriangle} fixedWidth/> bbb</li>
          <li><FontAwesomeIcon icon={faSkull} className="text-dark" fixedWidth/> bbb</li>
        </ul>
      </Marquee>
    );
  }
}

export default AlarmMarquee;
