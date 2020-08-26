import React, { Component } from 'react';
 
import './sass/main.scss'

import DashCatalog from './components/DashCatalog/DashCatalog'
import Header from './components/Header/Header'
import Opening from './components/Opening/Opening'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Opening/>
        <DashCatalog/>
      </div>
    );
  }
}

export default App;
