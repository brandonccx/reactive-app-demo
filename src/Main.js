import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import AppList from './containers/AppList';
import AddApp from './containers/AddApp';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <h1 className="Main-title">Reactive UI demo</h1>
        </header>
        <AddApp />
        <AppList />
      </div>
    );
  }
}

export default Main;
