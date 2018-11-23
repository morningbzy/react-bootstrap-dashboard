import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import './BaseLayout.scss';
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import MainContainer from "../MainContainer/MainContainer";
import HeaderBar from "../HeaderBar/HeaderBar";

class BaseLayout extends Component {
  render() {
    return (
      <>
        <HeaderBar toggled={this.props.toggled} toggleSidebar={this.props.toggleSidebar}/>
        <Container fluid id="wrapper" className={(this.props.toggled ? "toggled" : "")}>
          <Row className="flex-grow-1">
            <SidebarMenu/>
            <MainContainer title="Page Title"/>
          </Row>
        </Container>
      </>
    );
  }
}

export default BaseLayout;
