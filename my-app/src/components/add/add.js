import React, {Component} from 'react'
import {v1 as uuid} from 'uuid';

export default class Add extends Component{

   add = ()=>{
      let {addComment} = this.props;

      let name=this.name.value;
      let content = this.content.value;
      if(!name.trim() || !content.trim()){
         return
      }
      addComment({id:uuid(),name:name,content:content})
      this.name='';
      this.content = '';
   }

    render(){
       return(
          <div className='col-md-4'>
            <form className='form-horizontal'>
               <div className='form-group'>
                  <label>UserName</label>
                  <input type='text' className='form-control' placeholder='username' ref={(name)=>{this.name=name}}/>
               </div>
               <div className='form-group'>
                  <label>Comment</label>
                  <textarea className='form-control' rows='6' placeholder='comment content' ref={(content)=>{this.content=content}}></textarea>
               </div>
               <div className='form-group'>
                  <div className='col-sm-offset-2'>
                     <button onClick={this.add}  type='button' className='btn btn-default pull-right'>Submit</button>
                  </div>
               </div>
            </form>
          </div>
       )
    }
}