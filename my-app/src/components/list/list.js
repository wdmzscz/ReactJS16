import React from 'react';
import Item from '../item/item'


export default class List extends React.Component{
    render(){
        let {comments} = this.props;
        return(
            <div className='col-md-8'>
                <h3 className='reply'>Reply:</h3>
                <h2 style={{display:comments.length === 0?'block':'none'}}>There is no comments, click to add comments!!! </h2>
                <ul className='list-group'>
                   {
                       comments.map((item)=>{
                        //if you have so many keys, then doing {...item}
                        return <Item key={item.id} {...item}/>
                       })
                   }
                </ul>
            </div>
        )
    }
}