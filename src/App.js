import React, { Component } from 'react';
import BaseLayout from "./components/BaseLayout/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
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
  faHdd,
  faSearch,
  faEthernet,
  faFileAlt,
  faDesktop,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';


import {
  far,
  faClock,
} from "@fortawesome/free-regular-svg-icons";

import {
  fab,
  faLinux,
  faUbuntu,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

import './App.scss';
import $ from 'jquery';

library.add(
  // regular
  far, faClock,
  // solid
  fas, faHome, faInfo, faInfoCircle, faCogs, faCog, faTachometerAlt, faTrash, faPen, faBell, faCircle, faServer,
  faNetworkWired, faTimesCircle, faExclamationTriangle, faSkull, faSync, faRedo, faHdd, faSearch, faEthernet,
  faFileAlt, faDesktop, faLaptop,
  // brand
  fab, faLinux, faUbuntu, faWindows,
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

  toggleRightSidebar = () => {
    $('body').toggleClass('right-sidebar-collapsed');
    // this.setState({toggled: !this.state.toggled});
  };

  render() {
    return (
      <BrowserRouter>
        <BaseLayout toggled={this.state.toggled}
                    toggleSidebar={this.toggleSidebar}
                    toggleRightSidebar={this.toggleRightSidebar}/>
      </BrowserRouter>
    );
  }
}

export default App;
