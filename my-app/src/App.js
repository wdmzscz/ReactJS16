import React from 'react';
import Add from './components/add/add';
import List from './components/list/list';
import './App.css';

class App extends React.Component{
  render(){
    return (
        <div>
          <header className='site-header'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1>Please leave comments below:</h1>
                </div>
              </div>
            </div>
          </header>
          <div className='container'>
            <Add/>
            <List/>
          </div>
        </div>
      )
  }
}

export default App;
