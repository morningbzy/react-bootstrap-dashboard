import React, { Component } from 'react';

import './App.scss';
import BaseLayout from "./components/BaseLayout/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faInfo, faInfoCircle, faCogs, faCog, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircle, faServer } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { far, faClock } from "@fortawesome/free-regular-svg-icons";

library.add(
  far,
  faHome, faInfo, faInfoCircle, faCogs, faCog, faTachometerAlt,
  faBell, faCircle, faServer, faNetworkWired, faClock,
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: true,
    }
  }

  toggleSidebar = () => {
    this.setState({toggled: !this.state.toggled});
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
