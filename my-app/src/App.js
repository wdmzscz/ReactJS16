import React from 'react';
import Add from './components/add/add';
import List from './components/list/list';
import './App.css';

class App extends React.Component{
  state = {
    comments: [{
      id:'adsdq3w123',
      name: 'tom',
      content: 'good'
    }, {
      id:'adsdq3w1fg3',
      name: 'jim',
      content: 'good'
    }, {
      id:'adasdqwtttw123',
      name: 'tt',
      content: 'good'
    }]
  }

  render(){
    let {comments} = this.state
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
            <List comments={comments}/>
          </div>
        </div>
      )
  }
}

export default App;
