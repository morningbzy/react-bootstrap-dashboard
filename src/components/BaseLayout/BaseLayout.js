import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import './BaseLayout.scss';
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import HeaderBar from "../HeaderBar/HeaderBar";
import { Home, Dashboard, Agent, AgentSpec, Alarm, AlarmHistory, UserMgr, RoleMgr, PermMgr, Signin } from "../../pages";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "../AuthRoute";
import store from '../../redux/store';
import { signOut } from "../../redux/actions/signin-action";
import AgentTree from "../Agent/AgentTree";

class BaseLayout extends Component {
  handleSignOut = () => {
    store.dispatch(signOut());
    this.setState({});
  };

  render() {
    return (
      <Switch>
        <Route path="/login" exact component={(props) => (<Signin  {...props}/>)}/>
        <Route>
          <>
            <HeaderBar toggleSidebar={this.props.toggleSidebar}
                       toggleRightSidebar={this.props.toggleRightSidebar}
                       handleSignout={this.handleSignOut}/>
            <Container fluid id="wrapper">
              <Row className="flex-grow-1 flex-nowrap">
                <SidebarMenu/>
                <Switch>
                  <AuthRoute path="/" exact
                             component={(props) => (<Home title="Home" {...props}/>)}/>
                  <AuthRoute path="/dashboard" exact
                             component={(props) => (<Dashboard title="Dashboard" {...props}/>)}/>
                  <AuthRoute path="/agent/:id" exact
                             component={(props) => (<AgentSpec title="Agent" {...props}/>)}/>
                  <AuthRoute path="/agent" exact
                             component={(props) => (<Agent title="Agent" {...props}/>)}/>
                  <AuthRoute path="/alarmmgr/current" exact
                             component={(props) => (<Alarm title="Alarms" {...props}/>)}/>
                  <AuthRoute path="/alarmmgr/history" exact
                             component={(props) => (<AlarmHistory title="Alarms" {...props}/>)}/>
                  <AuthRoute path="/sysmgr/user" exact
                             component={(props) => (<UserMgr title="System Management" {...props}/>)}/>
                  <AuthRoute path="/sysmgr/role" exact
                             component={(props) => (<RoleMgr title="System Management" {...props}/>)}/>
                  <AuthRoute path="/sysmgr/perm" exact
                             component={(props) => (<PermMgr title="System Management" {...props}/>)}/>
                  <AuthRoute component={(props) => (<div id="container-wrapper" className="flex-grow-1">null</div>)}/>
                </Switch>
                <div id="right-sidebar-wrapper">
                  <AgentTree/>
                </div>
              </Row>
            </Container>
          </>
        </Route>
      </Switch>
    );
  }
}

export default BaseLayout;
