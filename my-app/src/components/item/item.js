import React from 'react'

export default class Item extends React.Component{
    render(){
        let {name,content} = this.props
        return (
            <div>
            <li className='list-group-item'>
                <div className='handle'>
                    <a href='#1'></a>
                </div>
                <p className='user'>{name}<span></span></p>
                <p className='centence'>{content}</p>
            </li>
        </div>
        )
    }
}