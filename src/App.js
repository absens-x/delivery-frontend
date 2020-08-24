import React, { Component } from 'react';
 
import './sass/main.scss'

import Button from './components/UI/Button/Button';
// import Input from './components/UI/Input/Input';
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
