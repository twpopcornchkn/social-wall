import React, { Component } from 'react';
import './App.css';
import Feed from './containers/Feed/Feeds';

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
