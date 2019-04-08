import React, { Component } from 'react';

import {Provider} from "react-redux";
import {configStore} from "../store/index";

import Feed from './Feed/Feeds';

class App extends Component {
  render() {
    return (
      <div className="container">  
          <Feed/>
      </div>
    );
  }
}

export default App;
