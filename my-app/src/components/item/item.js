import React from 'react';
import './item.css';

export default class Item extends React.Component{

    delete= (id)=>{
        //delete id
        const {deleteComment}=this.props
        if(window.confirm('Are you sure to delete this comments?')){
            deleteComment(id)
        }
        
    }

    render(){
        let {id,name,content} = this.props
        return (
            <div>
            <li className='list-group-item'>
                <div className='handle'>
                    <a className="btn btn-default btn-xs" href='#1' onClick={()=>{this.delete(id)}}>delete</a>
                </div>
                <p className='user'>{name}:<span></span></p>
                <p className='centence'>{content}</p>
            </li>
        </div>
        )
    }
}