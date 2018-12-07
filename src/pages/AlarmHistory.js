import React, { Component } from 'react';
import { Card, Form, Nav, Button, Row, Col, Overlay, Tooltip, Popover } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';

import './page.scss';
import * as yup from 'yup';
import AlarmMarquee from "../components/AlarmMarquee/AlarmMarquee";
import AlarmTable from "../components/Alarm/AlarmTable";
import { Form as FormikForm, Formik } from "formik";
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import 'bootstrap-daterangepicker/daterangepicker.css';


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
    };
    this.attachRef = target => this.setState({target});
  }


  render() {
    const {target} = this.state;
    console.log(target);

    return (
      <div id="container-wrapper" className="flex-grow-1">
        <AlarmMarquee/>
        <Card className="border-0">
          <Card.Header className="bg-white">
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item as="span" id="page-title">
                <Nav.Link as="b" disabled>{this.props.title}</Nav.Link>
              </Nav.Item>
            </Nav>
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
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                  <FormikForm>
                    <Form.Group as={Row}>
                      <Form.Label column sm="1" className="col-form-label-sm">label</Form.Label>
                      <Col sm="3">
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
                      </Col>
                      <Form.Label column sm="1" className="col-form-label-sm">label</Form.Label>
                      <Col sm="6">
                        <DateRangePicker autoApply
                                         onApply={(event, picker) => {
                                           const data = this.state.data;
                                           data.startDate = picker.startDate.format('YYYY-MM-DD');
                                           data.endDate = picker.endDate.format('YYYY-MM-DD');
                                           this.setState({data});
                                         }}>
                          <Row>
                            <Col sm="5">
                              <Form.Control type="text" size="sm"
                                            name="dateRange"
                                            onChange={handleChange}
                                            value={values.startDate}
                                            ref={this.attachRef}/>
                            </Col>
                            <Form.Label column sm="1">~</Form.Label>
                            <Col sm="5">
                              <Form.Control type="text" size="sm"
                                            name="dateRange"
                                            onChange={handleChange}
                                            value={values.endDate}
                                            ref={this.attachRef}/>
                            </Col>
                          </Row>
                        </DateRangePicker>
                      </Col>
                      <Col sm="1">
                        <Button type="submit" size="sm">Sub</Button>
                      </Col>
                    </Form.Group>
                  </FormikForm>
                );
              }}
            />
            <AlarmTable/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AlarmHistory;