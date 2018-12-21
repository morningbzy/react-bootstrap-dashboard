import React, { Component } from 'react';
import BaseLayout from "./components/BaseLayout/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faInfo,
  faInfoCircle,
  faCogs,
  faCog,
  faTachometerAlt,
  faTrash,
  faPen,
  faBell,
  faCircle,
  faServer,
  faSync,
  faRedo,
  faTimesCircle,
  faExclamationTriangle,
  faSkull,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';


import {
  far,
  faClock
} from "@fortawesome/free-regular-svg-icons";

import './App.scss';
import $ from 'jquery';

library.add(
  // regular
  far, faClock,
  // solid
  faHome, faInfo, faInfoCircle, faCogs, faCog, faTachometerAlt, faTrash, faPen, faBell, faCircle, faServer,
  faNetworkWired, faTimesCircle, faExclamationTriangle, faSkull, faSync, faRedo,
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: true,
    }
  }

  toggleSidebar = () => {
    $('body').toggleClass('sidebar-collapsed');
    // this.setState({toggled: !this.state.toggled});
  };

  render() {
    return (
      <BrowserRouter>
        <BaseLayout toggled={this.state.toggled} toggleSidebar={this.toggleSidebar}/>
      </BrowserRouter>
    );
  }
}

export default App;
