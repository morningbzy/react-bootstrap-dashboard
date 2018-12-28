import React, { Component } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { Form as FormikForm, Formik } from "formik";
import * as yup from "yup";
import { Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import store from '../redux/store';
import { signIn } from "../redux/actions/signin-action";


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: '',
        password: '',
      },
      redirect: false,
    };
  }

  handleSignIn = (values, {setSubmitting}) => {
    store.dispatch(signIn(values.username));
    this.setState({redirect: true,});
    setSubmitting(false);
  };

  render() {
    console.log(this.state);

    let {from} = this.props.location.state || {from: {pathname: "/"}};

    if (this.state.redirect) {
      console.log(from);
      return (<Redirect to={from}/>);
    }

    return (
      <Card className="my-auto border-0">
        <Card.Body style={{backgroundColor: "rgba(0,0,0,.03)",}}>
          <Card className="mx-auto bg-transparent border-0" style={{maxWidth: "960px",}}>
            <div className="ml-auto" style={{maxWidth: "350px", padding: "15px",}}>
              <h1>Hello</h1>
              <p>What you can do is input the username and password, then click the 'Signin' button.</p>
              <Formik
                initialValues={this.state.data}
                onSubmit={this.handleSignIn}
                validationSchema={yup.object().shape({})}
                render={(props) => {
                  const {
                    values,
                    // touched,
                    // errors,
                    handleChange,
                    // handleBlur,
                    handleSubmit,
                    isSubmitting,
                  } = props;
                  return (
                    <FormikForm className="float-left" onSubmit={handleSubmit}>
                      <Form.Group as={Row}>
                        <Form.Label column sm="4" className="col-form-label-sm">Username</Form.Label>
                        <Col sm={8}>
                          <Form.Control type="text" size="sm" name="username" value={values.username}
                                        onChange={handleChange}/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label column sm="4" className="col-form-label-sm">Password</Form.Label>
                        <Col sm={8}>
                          <Form.Control type="password" size="sm" name="password" value={values.password}
                                        onChange={handleChange}/>
                        </Col>
                      </Form.Group>
                      <Button size="sm" type="submit" disabled={isSubmitting} block>Signin</Button>
                    </FormikForm>
                  );
                }}
              />
            </div>
          </Card>
        </Card.Body>
      </Card>
    );
  }
}
