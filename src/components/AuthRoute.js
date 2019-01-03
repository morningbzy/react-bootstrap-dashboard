import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";

import store from '../redux/store';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {isAuthenticated: false};
  }

  render() {
    // const isAuthenticated = localStorage.getItem('isAuthenticated') || "false";
    const isAuthenticated = true || store.getState().auth.isAuthenticated;
    const {component: Component, ...rest} = this.props;
    return (
      <Route {...rest}
             render={(props) =>
               isAuthenticated ? (
                 <Component {...props}/>
               ) : (
                 <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
               )
             }
      />
    );
  }
}

