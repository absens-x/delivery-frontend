import React, { Component } from 'react';
 
import './sass/main.scss'


import Header from './components/Header/Header'
import Opening from './components/Opening/Opening'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Opening/>
      </div>
    );
  }
}

export default App;
