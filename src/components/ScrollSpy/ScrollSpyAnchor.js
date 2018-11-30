import React, { Component } from 'react';

class Anchor extends Component {
  render() {
    return (
      <div className="anchor-wrapper">
        <a id={this.props.id} className="anchor"/>
      </div>
    )
  }
}

export default Anchor;