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

  addComment = (commentObj)=>{
    //state cant modify date directly；2，cant update data directly

    //1. get initil state
    let comments = [...this.state.comments];
    comments.unshift(commentObj);
    this.setState({comments})
  }

  deleteComment = (id)=>{
    //1 get initial state
    let {comments} = this.state;
    //get id and delete id
    let a = comments.filter((item)=>{
      return item.id !== id
    })
    this.setState({comments:a})
  }

  render(){
    let {comments} = this.state
    return (
        <div>
          <header className='jumbotron'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1>Please leave comments below:</h1>
                </div>
              </div>
            </div>
          </header>
          <div className='container'>
            <Add addComment={this.addComment}/>
            <List comments={comments} deleteComment={this.deleteComment}/>
          </div>
        </div>
      )
  }
}

export default App;
