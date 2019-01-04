import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';


export default class extends Component {
  getOption() {
    const data = {
      legendData: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
      seriesData: [
        {
          name: 'a',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'b',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'c',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'd',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'e',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'f',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'g',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'h',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'i',
          value: Math.round(Math.random() * 1000),
        },
        {
          name: 'j',
          value: Math.round(Math.random() * 1000),
        },
      ],
      selected: {
        a: true,
        b: true,
        c: true,
        d: true,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
      }
    };
    return {
      title: {
        text: 'Example',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)",
        confine: true,
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        left: 0,
        right: 0,
        bottom: 0,
        data: data.legendData,
        selected: data.selected,
      },
      series: [{
        name: 'xxx',
        type: 'pie',
        radius: ['30%', '70%'],
        data: data.seriesData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0,0,0,0.5)',
          }
        }
      }],
    };
  }

  render() {
    const {title} = this.props;
    return (
      <Card className="dashboard-widget">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <ReactEcharts theme={"lr"} option={this.getOption()}></ReactEcharts>
        </Card.Body>
      </Card>
    );
  }
};
