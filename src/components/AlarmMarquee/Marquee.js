import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const DEFAULT_FPS = 50;
const DEFAULT_PPS = 200;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: 0,
    };
    this.fps = props.fps === undefined ? DEFAULT_FPS : props.fps;
    this.pps = props.pps === undefined ? DEFAULT_PPS : props.pps;
    this.innerRef = React.createRef();
  }

  componentDidMount() {
    // const container = ReactDOM.findDOMNode(this);
    // const cw = container.offsetWidth;
    // this.setState({right: -cw * .25});
    this._start();
  }

  componentDidUpdate() {
    this._start();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  _start() {
    const container = ReactDOM.findDOMNode(this);
    const cw = container.offsetWidth;
    const inner = ReactDOM.findDOMNode(this.innerRef.current);
    const iw = inner.offsetWidth;

    clearTimeout(this._timer);

    const _marquee = () => {
      let right = this.state.right + this.pps / this.fps;
      const isRoundOver = right > (iw - cw) && right > iw;
      if (isRoundOver) {
        right = -cw;
      }
      this.setState({right});
    };

    this._timer = setTimeout(_marquee, 1000 / this.fps);
  }

  render() {
    const {id, children, className = ''} = this.props;

    const innerStyle = {
      display: 'inline-flex',
      position: 'relative',
      right: this.state.right,
      whiteSpace: 'nowrap',
    };
    return (
      <div id={id} className={`lr-marquee ${className}`} style={{overflow: 'hidden'}}>
        <span ref={this.innerRef} style={innerStyle}>
          {children}
        </span>
      </div>
    )
  }
}