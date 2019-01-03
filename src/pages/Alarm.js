import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import AlarmTable from "../components/Alarm/AlarmTable";
import AlarmBriefChartBar from "../components/Alarm/AlarmBriefChart";
import PageHeader from "../components/PageHeader";


class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: this.props.title,
        tabs: [
          {
            title: 'All',
            to: '/alarmmgr/current',
            props: {
              exact: true,
            },
          }, {
            title: 'History',
            to: '/alarmmgr/history',
            props: {
              exact: true,
            },
          },
        ],
      },
    };
  }

  render() {
    const {header} = this.state;
    return (
      <div id="container-wrapper" className="flex-grow-1">
        <Card className="border-0">
          <Card.Header className="container-header">
            <PageHeader {...header}/>
          </Card.Header>
          <Card.Body>
            <AlarmBriefChartBar className="mb-4" variant="light"/>
            <AlarmTable/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Alarm;
