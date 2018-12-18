import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const DEFAULT_FPS = 25;

export default class extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {right: 0,};
    this.fps = props.fps === undefined ? DEFAULT_FPS : props.fps;
  }

  componentDidMount() {
    this._start();
  }

  componentDidUpdate() {
    this._start();
  }

  _start() {
    clearTimeout(this._timer);
    const _marquee = () => {
      let right = this.state.right + 1;
      this.setState({right});
      this._timer = setTimeout(_marquee, this.speed);
    };
    this._timer = setTimeout(_marquee, this.speed);
  }

  render() {
    const {children, className = ''} = this.props;
    const innerStyle = {
      position: 'relative',
      right: this.state.right,
      whiteSpace: 'nowrap',
    };
    return (
      <div className={`lr-marquee ${className}`}
           style={{overflow: 'hidden'}}
           {...this.props}>
        <span style={innerStyle}>{children}</span>
      </div>
    )
  }
}