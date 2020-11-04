import React from 'react';


export default class List extends React.Component{
    render(){
        return(
            <div className='col-md-8'>
                <h3 className='reply'>Reply:</h3>
                <h2 style={{display:'none'}}>There is no comments, click to add comments!!! </h2>
                <ul className='list-group'>
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
                </ul>
            </div>
        )
    }
}