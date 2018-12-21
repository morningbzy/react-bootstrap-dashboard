import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';


export default class extends Component {
  getOption() {
    const LINE_COLORS = [
      [0.6, '#28a745'],
      [0.9, '#ffc107'],
      [1, '#dc3545'],
      // [1, '#6f42c1'],
    ];
    return {
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)",
      },
      series: [
        {
          name: 'CPU',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 100,
          radius: '80%',
          pointer: {
            width: 5,
          },
          axisLine: {
            lineStyle: {
              color: LINE_COLORS,
              width: 5,
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: 'auto',
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              color: 'auto',
            }
          },
          axisLabel: {
            padding: 0,
          },
          title: {
            fontWeight: 'bold',
            fontSize: 12,
          },
          data: [{value: 86, name: 'CPU(%)'}],
        },
        {
          name: 'Memory',
          type: 'gauge',
          z: 3,
          center: ['20%', '55%'],
          min: 0,
          max: 100,
          radius: '50%',
          endAngle: 45,
          splitNumber: 4,
          pointer: {
            width: 3,
          },
          axisLine: {
            lineStyle: {
              color: LINE_COLORS,
              width: 2.5,
            }
          },
          axisTick: {
            length: 5,
            lineStyle: {
              color: 'auto',
            }
          },
          splitLine: {
            length: 7.5,
            lineStyle: {
              color: 'auto',
            }
          },
          axisLabel: {
            fontSize: 10,
            padding: 0,
          },
          title: {
            fontWeight: 'bold',
            fontSize: 10,
          },
          detail: {
            fontSize: 20,
          },
          data: [{value: 96, name: 'mem(%)'}],
        },
        {
          name: 'Disk',
          type: 'gauge',
          z: 3,
          center: ['80%', '50%'],
          min: 0,
          max: 100,
          radius: '60%',
          startAngle: 60,
          endAngle: -60,
          splitNumber: 2,
          pointer: {
            width: 3,
          },
          axisLine: {
            lineStyle: {
              color: LINE_COLORS,
              width: 5,
            }
          },
          axisTick: {
            length: 6,
            lineStyle: {
              color: 'auto',
            }
          },
          splitLine: {
            length: 10,
            lineStyle: {
              color: 'auto',
            }
          },
          axisLabel: {
            fontSize: 10,
            padding: 0,
            formatter: (v) => {
              switch (v + '') {
                case '0':
                  return 'E';
                case '100':
                  return 'F';
                default:
                  return '';
              }
            }
          },
          title: {
            fontWeight: 'bold',
            fontSize: 10,
          },
          detail: {
            fontSize: 20,
          },
          data: [{value: 26, name: 'Disk A(%)'}],
        },
      ],
    };
  }

  render() {
    const {title} = this.props;
    return (
      <Card className="dashboard-widget widget-2x">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <ReactEcharts theme={"lr"} option={this.getOption()}></ReactEcharts>
        </Card.Body>
      </Card>
    );
  }
};
