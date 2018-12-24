import React, { Component } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5, 6].map(() => Math.random() * 100),
    };
  }

  refresh = () => {
    this.setState({
      data: [1, 2, 3, 4, 5, 6].map(() => Math.random() * 100),
    })
  };

  getOption() {
    return {
      title: {text: 'Example',},
      tooltip: {},
      xAxis: {
        data: ['a', 'b', 'c', 'd', 'e', 'f'],
      },
      yAxis: {},
      series: [{
        name: 'xxx',
        type: 'bar',
        data: this.state.data,
      }],
    };
  }

  render() {
    const {title} = this.props;
    return (
      <Card className="dashboard-widget">
        <Card.Header>
          <Nav>
            <Nav.Item className="mr-auto">
              {title}
            </Nav.Item>
            <Nav.Item>
              <Button variant="link" onClick={this.refresh}><FontAwesomeIcon icon="redo" size="sm"/></Button>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
            <ReactEcharts theme={"lr"} option={this.getOption()}></ReactEcharts>
        </Card.Body>
      </Card>
    );
  }
};
