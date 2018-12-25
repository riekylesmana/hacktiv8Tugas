import React, { Component } from 'react'; 
import './style.css';
import {Header,Footer,Content}from '../../components';
import axios from "axios"; 
import * as ReactDOM from 'react-dom';
import { Container, Box, Column, Columns, Notification, Delete    } from 'bloomer';
import 'bulma/css/bulma.css'; 
import { connect } from "react-redux";
import {userActions} from '../../actions';
import { Redirect } from "react-router-dom";  
import {  BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

export default class NewsDetail extends Component {
    
    constructor(props) {
        super(props); 
        this.state={ 
            news:'', 
        }
    }  
    
   
    
  componentDidMount() {  
     
  }
    
redirect = ()=>{    
    let path = "/news";
    this.props.history.push(path);  
}   
      
    

    renderNewsDetail(){    
        return ( 
            <div className="container news-detail">
                <div className="card"> 
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-96x96">
                          <img  src={this.props.location.state.news.urlToImage} alt="Placeholder image"/>
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{this.props.location.state.news.title}</p>
                        <p className="subtitle is-6">{this.props.location.state.news.author}</p>
                      </div>
                    </div>

                    <div className="content"> 
                      {this.props.location.state.news.content} <br/>
                      <label>Source: </label><a>{this.props.location.state.news.source.name}</a> <br/>
                      <label>Published Date: {this.props.location.state.news.publishedAt}</label><time > </time>
                    </div>
                    <button onClick={()=>this.redirect()}   className="btn btn-primary">Back To News</button>  
                  </div>
                </div>
            </div>    
        ) 
    }
    
  redirectToNews = ()=>{
        return(
            <Redirect 
                to={{
                    pathname:"/news"
                }}
            />
        )
    }   
    
  render() {   
      if(this.props.location.state){
          return (
                <div>  
                    <div className="main">     
                        <Header/>   
                        <Content  
                            contentFill={() => this.renderNewsDetail()} 
                        /> 
                        <Footer/>   
                    </div> 
                </div>
            ) 
        }else{  
            return this.redirectToNews()
        }   
  }
   
}

 
 
