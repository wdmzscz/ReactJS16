import React from 'react';
import Item from '../item/item'


export default class List extends React.Component{
    render(){
        return(
            <div className='col-md-8'>
                <h3 className='reply'>Reply:</h3>
                <h2 style={{display:'none'}}>There is no comments, click to add comments!!! </h2>
                <ul className='list-group'>
                   <Item/>
                   <Item/>
                   <Item/>
                   <Item/>
                </ul>
            </div>
        )
    }
}