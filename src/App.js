import React, { Component } from 'react';
 
import './sass/main.scss'

import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>It's Ok</h1>

        <Button>Найти</Button>
        <hr/>
        <Input placeholder='Place Text'></Input>

      </div>
    );
  }
}

export default App;
