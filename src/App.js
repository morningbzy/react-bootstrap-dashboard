import React, { Component } from 'react';

import './App.scss';
import BaseLayout from "./components/BaseLayout/BaseLayout";
import { BrowserRouter } from "react-router-dom";

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
