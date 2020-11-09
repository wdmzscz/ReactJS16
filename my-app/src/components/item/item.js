import React from 'react'

export default class Item extends React.Component{
    render(){
        return (
            <div>
            <li className='list-group-item'>
                <div className='handle'>
                    <a href='#1'></a>
                </div>
                <p className='user'><span></span></p>
                <p className='centence'>not bad</p>
            </li>
            <li className='list-group-item'>
                <div className='handle'>
                    <a href='#1'></a>
                </div>
                <p className='user'><span></span></p>
                <p className='centence'>a little hard</p>
            </li>
        </div>
        )
    }
}