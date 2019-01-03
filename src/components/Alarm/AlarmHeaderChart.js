import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';

import './AlarmBriefChart.scss';
import { STATE_LABEL } from "../../common/constants";


class AlarmHeaderChart extends Component {
  getOption() {
    const {color, state} = this.props;
    const {data, total} = this.props.data;

    return {
      total,
      title: {
        show: false,
      },
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltip: {
        trigger: 'axis',
        position: (pos) => ([pos[0] + 10, pos[1] + 10]),
        formatter: '{a0} {b0}: {c0}',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: `rgba(${color},.05)`,
          }
        }
      },
      xAxis: {
        show: false,
        data: [
          '1:00-2:00', '3:00-4:00', '5:00-6:00', '7:00-8:00', '9:00-10:00', '11:00-12:00',
          '1:00-2:00', '3:00-4:00', '5:00-6:00', '7:00-8:00', '9:00-10:00', '11:00-12:00',
        ],
      },
      yAxis: {show: false},
      series: [
        {
          name: state.toUpperCase(),
          type: 'bar',
          data: data,
          barWidth: '50%',
          itemStyle: {
            color: `rgba(${color},.75)`,
          },
          emphasis: {
            itemStyle: {
              color: `rgba(${color},.9)`,
            }
          }
        },
      ],
    };
  }

  render() {
    const {
      state,
      chartSizeX = "40px",
      chartSizeY = "24px",
    } = this.props;
    const {percentage} = this.props.data;
    const {total, ...option} = this.getOption();

    return (
      <Card className={`bg-transparent border-0 lr-${state}`}>
        <Card.Body className="p-0">
          <div className="d-flex justify-content-between align-items-end">
            <div className="d-flex flex-column mr-2 text-center">
              <p className="mb-0"
                 style={{fontSize: ".8rem", lineHeight: "1.1em",}}>{STATE_LABEL[state].toUpperCase()}</p>
              <p className="mb-auto" style={{lineHeight: "1.1em",}}>{total}</p>
            </div>
            <ReactEcharts option={option} style={{height: chartSizeY, width: chartSizeX,}}/>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default class AlarmHeaderChartBar extends Component {
  constructor(props) {
    super(props);

    this.data = {};
    let total = 0;
    ['success', 'warning', 'danger', 'fatal'].map((state, i) => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => Math.round(Math.random() * 200));
      const sum = data.reduce((p, c) => (p + c));
      this.data[state] = {
        total: sum,
        data,
      };
      total += sum;
    });

    ['success', 'warning', 'danger', 'fatal'].map((state) => {
      this.data[state].percentage = Math.round(this.data[state].total * 100.0 / total);
    });
  }


  render() {
    const {color, className = '', ...rest} = this.props;
    return (
      <CardDeck className={`lr-alarm-panel ${className}`} {...rest}>
        {
          Object.entries(this.data).map((item, i) => (
            <AlarmHeaderChart key={i} state={item[0]} data={item[1]} color={color}/>
          ))
        }
      </CardDeck>
    );
  }
}