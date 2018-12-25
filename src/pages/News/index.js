 
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
import { Link } from "react-router-dom";

class News extends Component{ 
    
constructor(){
    super(); 
    this.state={
        news:[], 
        nextPage:0, 
        
    }
}  
    
  
    
componentDidMount() {
     
    
     axios
    .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=61c1c7d7d2ff460f98d6ec62a4f8e144")
    .then(response => { 
        let data            = response.data.articles;  

        {/*
        let source          = data.map(datum=>datum.source); 
        let newsSource      = source.map(datum=>datum.name);
        let newsAuthor      = data.map(datum=>datum.author);  
        let newsTitle       = data.map(datum=>datum.title);  
        let newsDescription = data.map(datum=>datum.description);  
        let newsUrl         = data.map(datum=>datum.url);  
        let newsImage       = data.map(datum=>datum.urlToImage);  
        let newsPublishedAt = data.map(datum=>datum.publishedAt);  
        let newsContent     = data.map(datum=>datum.content); 
        */}

        this.setState({
            news:data
        }); 
    }).then(()=>{
        this.setState({loadingMessage:''});
    })
    .catch(err=>{
        this.setState({
            news:["error loading"]
        });
    })     
       
} 
    
    
    
    

    renderNews(){   
            return this.state.news.map((eachEvent,index)=>{
                return ( 
                        <div className="container" key={index}>
                            <div className="loadingMessage">
                                {this.state.loadingMessage}
                            </div>
                            <div className="card"> 
                              <div className="card-content">
                                <a> 
                                    <Link to={{ pathname: '/newsDetail', state: { news:eachEvent }}}> 
                                    <div className="media">
                                      <div className="media-left">
                                        <figure className="image is-96x96">
                                          <img src={eachEvent.urlToImage} alt="Placeholder image"/>
                                        </figure>
                                      </div>
                                      <div className="media-content">
                                        <p className="title is-4">{eachEvent.title}</p>
                                        <p className="subtitle is-6">@{eachEvent.author}</p>
                                      </div>
                                    </div>
                                   </Link>
                               </a>

                                <div className="content"> 
                                  {eachEvent.description}
                                  <a>@{eachEvent.author}</a> <br/>
                                  <label>Source: </label><a href={eachEvent.url}>{eachEvent.source.name}</a> <br/>
                                  <label>Published Date: </label><time >{eachEvent.publishedAt}</time>
                                </div>
                              </div>
                            </div>
                        </div>  
                );
            }); 
    }
    
    renderContent() {
        if (this.state.news.length === 0) {
            return (
                <div>Loading Data , Please Wait.....</div>
            )
        } else {
             return (
                <Content  
                    contentFill={() => this.renderNews()} 
                /> 
            )   
        } 
    }

    redirectToLogin = ()=>{
        return(
            <Redirect 
                to={{
                    pathname:"/login"
                }}
            />
        )
    }   
    
  render() {   
      if(this.props.user.isLogin){
          return (
                <div>  
                    <div className="main">     
                        <Header/>   
                        { this.renderContent() }
                        <Footer/>  
                    </div> 
                </div>
            )
    
    }else{  
        return this.redirectToLogin()
    }  
    
  }
}

const mapStateToProps = (state) => {
    console.log('state:',state);
    return {
        user:state.user, 
    };
  };
const mapDispatchToProps = (dispatch) => { 
    return {
        ubahIsLogin:(isLogin)=>dispatch(userActions.ubahIsLogin(isLogin)), 
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(News);


 
 
