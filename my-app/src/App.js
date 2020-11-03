import React from 'react';
import Hello from './hello';
import './App.css';

class App extends React.Component{
  render(){
    return (
        <div>
          <h1>App</h1>
          <Hello/>
        </div>
      )
  }
}

export default App;
