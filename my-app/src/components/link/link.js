import React from 'react';
import './link.css';
import axios from 'axios';

export default class Link extends React.Component{

    state ={
        repoName:'',
        repoUrl:'',
        isLoading:true, //if is display or not
        keyword:'r', //search key word
        error:'' //error
    }

    componentDidMount(){
        //send ajax call
        const URL = `https://api.github.com/search/repositories?q=${this.state.keyword}&sort=stars`
        axios.get(URL)
        .then((value)=>{
            let {name,html_url} = value.data.items[0]
            console.log(value.data.items[0].name)
            console.log(value.data.items[0].html_url)
            this.setState({
                repoName:name,
                repoUrl:html_url,
                isLoading:false
            })
        })
        .catch((error)=>{
            this.setState({
                isLoading:false,
                error:error.message
            })
            console.log(error)
        })
    }

    render(){
        const {repoName,repoUrl,isLoading,keyword,error} = this.state
        if(isLoading){
            return (
                <div>Loading</div>
            )
        }else if(repoName && repoUrl && !error){
            return (
                <div className='hyperlink'>
                    <p>In github repo, start with {keyword} letter, and get most like content is <a href={repoUrl}>{repoName}</a></p>
                </div>
            )
        }else{
            return (
                <div>{error}</div>
            )
        }
    }
}