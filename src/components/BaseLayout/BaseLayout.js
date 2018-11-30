import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import './BaseLayout.scss';
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import HeaderBar from "../HeaderBar/HeaderBar";
import { Home, Dashboard, Agent, AgentSpec } from "../../pages";
import { Route } from "react-router-dom";

class BaseLayout extends Component {
  render() {
    return (
      <>
        <HeaderBar toggled={this.props.toggled} toggleSidebar={this.props.toggleSidebar}/>
        <Container fluid id="wrapper" className={(this.props.toggled ? "toggled" : "")}>
          <Row className="flex-grow-1 flex-nowrap">
            <SidebarMenu/>
            <Route path="/" exact component={(props) => (<Home title="Home" {...props}/>)}/>
            <Route path="/dashboard" exact component={(props) => (<Dashboard title="Dashboard" {...props}/>)}/>
            <Route path="/agent/:id" exact component={(props) => (<AgentSpec title="Agent" {...props}/>)}/>
            <Route path="/agent" exact component={(props) => (<Agent title="Agent" {...props}/>)}/>
            <div id="rightbar-wrapper" className={(this.props.toggled ? "toggled" : "")}>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default BaseLayout;
