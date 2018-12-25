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
import {PEOPLE }  from '../../images';


class Profile extends Component{ 
    
constructor(){
    super();  
    this.state={}
}  
     
     
redirect = ()=>{    
    let path = "/news";
    this.props.history.push(path);  
}   
     
 
    
renderFormProfile(){
     return(
        <div className="register">
          <div className="register-card"> 
            <div className="card-title logo">
                <a className="logo-text" href="#"> 
                  <img src="https://bulma.io/images/bulma-logo-white.png" width="110" height="28"></img> 
                </a>
              <h1>My Profile</h1>
            </div> 
            <div className="content">
              <form>  
                <div className="field">
                    <center><img src={ PEOPLE } width="172" ></img> </center>
                </div>
                <div className="field"> 
                    <label>Fullname : {this.props.user.fullName}</label>    
                </div>
                <div className="field">
                    <label>Email : {this.props.user.email}</label>    
                </div> 
                <div className="field">
                    <label>Gender : {this.props.user.gender}</label>    
                </div>  
                <div className="field"> 
                    <label>Phone :  {this.props.user.phone}</label>    
                </div>
                <div className="field"> 
                    <label>Birth Date :  {this.props.user.birthDate}</label>    
                </div> 
                    <button onClick={()=>this.redirect()} type="submit" className="btn btn-primary">Back To News</button>  
              </form>
            </div>
          </div>
        </div>
     )
 } 

    
render() { 
    return (
        <div className="main">   
            {this.renderFormProfile()} 
        </div>
    );
  }
}                             
const mapStateToProps = (state) => { 
    return {
        user:state.user, 
    };
  };
const mapDispatchToProps = (dispatch) => { 
    return {
        ubahIsLogin:(isLogin)=>dispatch(userActions.ubahIsLogin(isLogin)),  
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
    


 
 
