import React, { Component } from 'react';
import { Card, Form, Button, Overlay, DropdownButton, Dropdown } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import $ from 'jquery';

import * as yup from 'yup';
import AlarmTable from "../components/Alarm/AlarmTable";
import { Form as FormikForm, Formik } from "formik";
import 'react-datetime/css/react-datetime.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import AlarmBriefChartBar from "../components/Alarm/AlarmBriefChart";
import PageHeader from "../components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index.es";


class AlarmHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null,
      data: {
        showMe: 'what?',
        startDate: '',
        endDate: '',
      },
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
    this.attachRef = target => this.setState({target});
  }

  render() {
    const {target, header,} = this.state;

    return (
      <div id="container-wrapper" className="flex-grow-1">
        <Card className="border-0">
          <Card.Header className="container-header">
            <PageHeader {...header}/>
          </Card.Header>
          <Card.Body>
            <Formik
              initialValues={this.state.data}
              onSubmit={(values, {setSubmitting}) => {
                console.log(JSON.stringify(values));
                setSubmitting(false);
              }}
              validationSchema={yup.object().shape({
                showMe: yup.string().required('RRR~Required!'),
              })}
              render={(props) => {
                const {
                  values,
                  // touched,
                  errors,
                  handleChange,
                  // handleBlur,
                  // handleSubmit,
                } = props;
                console.log(handleChange);
                return (
                  <FormikForm className="form-inline card-header-form">
                    <Form.Group>
                      <DropdownButton size="sm"
                                      name="alarmLevel"
                                      value={values.alarmLevel}
                                      title={`Filter: ${values.alarmLevel}`}
                                      variant="outline-input"
                                      onClick={(e) => {
                                        console.log($(e.target).attr('value'));
                                      }}
                                      isInvalid={!!errors.showMe}
                                      ref={this.attachRef}>
                        <Dropdown.Item value="info">Info</Dropdown.Item>
                        <Dropdown.Item value="warn" >Warn</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item value="error">Error</Dropdown.Item>
                      </DropdownButton>
                      <Overlay target={target} show={!!errors.showMe} placement="auto-start">
                        {props => (
                          <div className="text-danger small" style={{...props.style,}} {...props}>
                            {errors.showMe}
                          </div>
                        )}
                      </Overlay>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Keyword</Form.Label>
                      <Form.Control type="text" size="sm"
                                    name="showMe"
                                    value={values.showMe}
                                    onChange={handleChange}
                                    isInvalid={!!errors.showMe}
                                    ref={this.attachRef}/>
                      <Overlay target={target} show={!!errors.showMe} placement="auto-start">
                        {props => (
                          <div className="text-danger small" style={{...props.style,}} {...props}>
                            {errors.showMe}
                          </div>
                        )}
                      </Overlay>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Date Between</Form.Label>
                      <DateRangePicker autoApply
                                       onApply={(event, picker) => {
                                         const data = this.state.data;
                                         data.startDate = picker.startDate.format('YYYY-MM-DD');
                                         data.endDate = picker.endDate.format('YYYY-MM-DD');
                                         this.setState({data});
                                       }}>
                        <Form.Control type="text" size="sm"
                                      name="dateRange"
                                      onChange={handleChange}
                                      value={`${values.startDate} ~ ${values.endDate}`}
                                      ref={this.attachRef}/>
                      </DateRangePicker>
                    </Form.Group>
                    <Form.Group>
                      <Button type="submit" size="sm">
                        <FontAwesomeIcon icon={['fas', 'search']} fixedWidth/> Search
                      </Button>
                    </Form.Group>
                  </FormikForm>
                );
              }}
            />
            <AlarmBriefChartBar className="mb-4"/>
            <AlarmTable/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AlarmHistory;
