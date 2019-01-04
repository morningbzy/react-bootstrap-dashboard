import React, { Component } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DATES = [
  '01-01',
  '01-02',
  '01-03',
  '01-04',
  '01-05',
  '01-06',
  '01-07',
  '01-08',
  '01-09',
  '01-10',
  '01-11',
  '01-12',
  '01-13',
  '01-14',
  '01-15',
  '01-16',
  '01-17',
  '01-18',
  '01-19',
  '01-20',
  '01-21',
  '01-22',
  '01-23',
  '01-24',
  '01-25',
  '01-26',
  '01-27',
  '01-28',
  '01-29',
  '01-30',
  '01-31',
  '02-01',
  '02-02',
  '02-03',
  '02-04',
  '02-05',
  '02-06',
  '02-07',
  '02-08',
  '02-09',
  '02-10',
  '02-11',
  '02-12',
  '02-13',
  '02-14',
  '02-15',
  '02-16',
  '02-17',
  '02-18',
  '02-19',
  '02-20',
  '02-21',
  '02-22',
  '02-23',
  '02-24',
  '02-25',
  '02-26',
  '02-27',
  '02-28',
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATES.map(() => Math.random() * 10 + 70),
      data2: DATES.map(() => Math.random() * 15 + 10),
    };
  }

  refresh = () => {
    this.setState({
      data: DATES.map(() => Math.random() * 10 + 70),
      data2: DATES.map(() => Math.random() * 15 + 10),
    })
  };

  getOption() {
    return {
      title: {text: 'Example',},
      tooltip: {
        confine: true,
      },
      xAxis: {
        data: DATES,
      },
      yAxis: {},
      dataZoom: [{
        startValue: '01-01',
      }, {
        type: 'inside',
      }],
      series: [{
        name: 'xxx',
        type: 'line',
        data: this.state.data,
        smooth: true,
      }, {
        name: 'yyy',
        type: 'line',
        data: this.state.data2,
        smooth: true,
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
