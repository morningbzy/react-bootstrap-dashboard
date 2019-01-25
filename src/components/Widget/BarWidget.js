import React, { Component } from 'react';
import { Button, Card, Form, Nav } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRangePicker } from "react-bootstrap-daterangepicker";


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
      tooltip: {
        confine: true,
      },
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
          {/*<Form className="form-inline card-header-form">*/}
            {/*<Form.Group>*/}
              {/*<Form.Label>Keyword</Form.Label>*/}
              {/*<Form.Control type="text" size="sm"*/}
                            {/*name="showMe"*/}
                            {/*ref={this.attachRef}/>*/}
            {/*</Form.Group>*/}
            {/*<Form.Group>*/}
              {/*<Form.Label>Date Between</Form.Label>*/}
              {/*<DateRangePicker autoApply*/}
                               {/*onApply={(event, picker) => {*/}
                                 {/*const data = this.state.data;*/}
                                 {/*data.startDate = picker.startDate.format('YYYY-MM-DD');*/}
                                 {/*data.endDate = picker.endDate.format('YYYY-MM-DD');*/}
                                 {/*this.setState({data});*/}
                               {/*}}>*/}
                {/*<Form.Control type="text" size="sm"*/}
                              {/*name="dateRange"*/}
                              {/*ref={this.attachRef}/>*/}
              {/*</DateRangePicker>*/}
            {/*</Form.Group>*/}
            {/*<Form.Group>*/}
              {/*<Button type="submit" size="sm">*/}
                {/*<FontAwesomeIcon icon={['fas', 'search']} fixedWidth/> Search*/}
              {/*</Button>*/}
            {/*</Form.Group>*/}
          {/*</Form>*/}
          <ReactEcharts theme={"lr"} option={this.getOption()}></ReactEcharts>
        </Card.Body>
      </Card>
    );
  }
};
