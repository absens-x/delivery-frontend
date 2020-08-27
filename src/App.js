import React, { Component } from 'react';
 
import './sass/main.scss'

import Header from './components/Header/Header'
import Opening from './components/Opening/Opening'
import DashCatalog from './components/DashCatalog/DashCatalog'
import OrgItem from './components/OrgItem/OrgItem'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Opening/>
        <DashCatalog/>
        <hr/>
        
        <div className="container">
          <OrgItem/>
        </div>
      </div>
    );
  }
}

export default App;
