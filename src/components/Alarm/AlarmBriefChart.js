import React, { Component } from 'react';
import { Card, CardDeck, ProgressBar } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './AlarmBriefChart.scss';
import { STATE_ICONS, STATE_LABEL } from "../../common/constants";
import { capitalize } from "../../common/functions";


class AlarmBriefChart extends Component {
  getOption() {
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
        formatter: '{b0}: {c0}',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(255,255,255,.05)',
          }
        }
      },
      xAxis: {
        show: false,
        data: [
          '周一', '周二', '周三', '周四', '周五', '周六', '周日',
          '周一', '周二', '周三', '周四', '周五', '周六', '周日',
        ],
      },
      yAxis: {show: false},
      series: [
        {
          type: 'bar',
          data: data,
          barWidth: '70%',
          itemStyle: {
            color: 'rgba(255,255,255,.75)',
          },
          emphasis: {
            itemStyle: {
              color: 'rgba(255,255,255,.9)',
            }
          }
        },
      ],
    };
  }

  render() {
    const {
      state,
      iconSizeX = "3rem",
      iconSizeY = "3rem",
      iconInnerSizeX = "50%",
      iconInnerSizeY = "50%",
      chartSizeX = "100px",
      chartSizeY = "",
    } = this.props;
    const {percentage} = this.props.data;

    const {total, ...option} = this.getOption();
    return (
      <Card className={`lr-alarm-brief-chart-card lr-${state}`}>
        <Card.Body className="p-2">
          <div className="d-flex justify-content-between font-weight-light">
            <div className="d-flex flex-column align-items-center">
              <i className="fa-layers fa-fw" style={{height: iconSizeY, width: iconSizeX,}}>
                <FontAwesomeIcon tag="i" fixedWidth icon="circle" className={`lr-icon-circle`}
                                 style={{height: iconSizeY, width: iconSizeX,}}/>
                <FontAwesomeIcon icon={['fas', STATE_ICONS[state]]}
                                 style={{height: iconInnerSizeY, width: iconInnerSizeX,}}/>
              </i>
            </div>
            <div className="text-right d-flex flex-column">
              <h4 className="mb-0 font-weight-light">{total}</h4>
              <p className="mb-auto">{percentage}%</p>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="px-2 py-1">
          <div className="d-flex justify-content-between font-weight-light">
            <span>{capitalize(STATE_LABEL[state])}</span>
            <ReactEcharts className="lr-chart" option={option}
                          style={{height: chartSizeY, width: chartSizeX,}}/>
          </div>
        </Card.Footer>
      </Card>
    );
  }
}

export default class AlarmBriefChartBar extends Component {
  constructor(props) {
    super(props);
    const {stack} = this.props;
    this.state = {stack,};

    this.data = {};
    let total = 0;
    ['success', 'warning', 'danger', 'fatal'].map((state, i) => {
      const data = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map(() => Math.round(Math.random() * 200));
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

  toggleStack = () => {
    this.setState({stack: !this.state.stack});
  };

  render() {
    const {stack, className, ...rest} = this.props;
    return this.state.stack === true ? (
      <ProgressBar onClick={this.toggleStack} className={`lr-stack ${className}`}>
        {
          Object.entries(this.data).map((item, i) => (
            <ProgressBar key={i} variant={item[0]} now={item[1].percentage}
                         label={`${capitalize(STATE_LABEL[item[0]])} ${item[1].percentage}%`}/>
          ))
        }
      </ProgressBar>
    ) : (
      <div className={`lr-unstacked ${className}`} onClick={this.toggleStack} {...rest}>
        <CardDeck>
          {
            Object.entries(this.data).map((item, i) => (
              <AlarmBriefChart state={item[0]} data={item[1]}/>
            ))
          }
        </CardDeck>
        <span className="arrow"><FontAwesomeIcon icon={['fas', 'angle-double-up']}/></span>
      </div>
    );
  }
}