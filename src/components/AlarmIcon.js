import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { STATE_ICONS } from "../common/constants";

export default class extends Component {
  render() {
    const {
      state,
      width = '1em',
      height = '1em',
      innerWidth = '40%',
      innerHeight = '40%',
      bgIcon = 'circle',
      iconStyle = 'fas',
    } = this.props;

    return (
      <i className="fa-layers fa-fw lr-alarm-icon" style={{height, width,}}>
        <FontAwesomeIcon tag="i" fixedWidth icon={bgIcon} className={`lr-alarm-icon-bg`} style={{height, width,}}/>
        <FontAwesomeIcon icon={[iconStyle, STATE_ICONS[state]]} className={`lr-alarm-icon-state`} style={{height: innerHeight, width: innerWidth,}}/>
      </i>
    );
  }
}
