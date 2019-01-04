import React, { Component } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4].map(() => [1, 2, 3, 4, 5, 6, 7].map(() => parseInt(Math.random() * 100 + 20)),),
    };
  }

  refresh = () => {
    this.setState({
      data: [1, 2, 3, 4].map(() => [1, 2, 3, 4, 5, 6, 7].map(() => parseInt(Math.random() * 100 + 20)),),
    })
  };

  getOption() {
    const {data} = this.state;

    return {
      title: {text: 'Example',},
      tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'shadow',},
        confine: true,
      },
      legend: {
        data: ['严重', '错误', '警告', '通知',],
        bottom: 0,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['一', '二', '三', '四', '五', '六', '日'],
      },
      series: [{
        name: '严重',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight',
          }
        },
        data: data[0]
      }, {
        name: '错误',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight',
          }
        },
        data: data[1],
      }, {
        name: '警告',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight',
          }
        },
        data: data[2],
      }, {
        name: '通知',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight',
          }
        },
        data: data[3],
      }],
    };
  }

  render() {
    const {title} = this.props;
    return (
      <Card className="dashboard-widget widget-2x">
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
