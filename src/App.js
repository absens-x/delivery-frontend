import React, { Component } from 'react';
 
import './sass/main.scss'
import Button from './components/UI/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>It's Ok</h1>
        <Button>Найти</Button>
      </div>
    );
  }
}

export default App;
