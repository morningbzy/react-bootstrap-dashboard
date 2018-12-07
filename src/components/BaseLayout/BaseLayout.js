import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import './BaseLayout.scss';
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import HeaderBar from "../HeaderBar/HeaderBar";
import { Home, Dashboard, Agent, AgentSpec, Alarm, AlarmHistory, UserMgr, RoleMgr, PermMgr} from "../../pages";
import { Route } from "react-router-dom";

class BaseLayout extends Component {
  render() {
    return (
      <>
        <HeaderBar toggleSidebar={this.props.toggleSidebar}/>
        <Container fluid id="wrapper">
          <Row className="flex-grow-1 flex-nowrap">
            <SidebarMenu/>
            <Route path="/" exact
                   component={(props) => (<Home title="Home" {...props}/>)}/>
            <Route path="/dashboard" exact
                   component={(props) => (<Dashboard title="Dashboard" {...props}/>)}/>
            <Route path="/agent/:id" exact
                   component={(props) => (<AgentSpec title="Agent" {...props}/>)}/>
            <Route path="/agent" exact
                   component={(props) => (<Agent title="Agent" {...props}/>)}/>
            <Route path="/alarmmgr/current" exact
                   component={(props) => (<Alarm title="Alarm" {...props}/>)}/>
            <Route path="/alarmmgr/history" exact
                   component={(props) => (<AlarmHistory title="Alarm History" {...props}/>)}/>
            <Route path="/sysmgr/user" exact
                   component={(props) => (<UserMgr title="User Management" {...props}/>)}/>
            <Route path="/sysmgr/role" exact
                   component={(props) => (<RoleMgr title="Role Management" {...props}/>)}/>
            <Route path="/sysmgr/perm" exact
                   component={(props) => (<PermMgr title="Permission Management" {...props}/>)}/>
            <div id="rightbar-wrapper">
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default BaseLayout;
