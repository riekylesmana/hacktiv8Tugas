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
import { Link } from "react-router-dom";


class Login extends Component{ 
    
    constructor(){
        super(); 
        this.state={} 
    }    
    handleOnChangeEmail(event) {
        this.setState({emailInput: event.target.value});
    }   
    handleOnChangePassword(event) {
        this.setState({passwordInput: event.target.value});
    }      
    handleClickRegister(event){ 
        event.preventDefault();     
        if(this.state.emailInput == this.props.user.email && this.state.passwordInput == this.props.user.password){  
            this.props.ubahIsLogin(true); 
            let path = "/news";
            this.props.history.push(path);
        }  else{
            alert("Incorrect username or password..");
            event.preventDefault();
        } 
    }; 
     
       
 renderFormLogin(){
     return(
         <div>
            <div className="info">
              Bypass login with <br/>username : test@mail.com<br/> password : test<br/>Or you can register by click register button..
            </div>
            <div className="login"> 
              <div className="login-card">  
                <div className="card-title logo">
                    <a className="logo-text" href="#"> 
                      <img src="https://bulma.io/images/bulma-logo-white.png" width="110" height="28"></img> 
                    </a>
                  <h1>LOGIN</h1>
                </div> 
                <div className="content">
                  <form onSubmit={(e) => this.handleClickRegister(e)}> 
                    <input className="email" type="email" name="email" title="email" placeholder="Email" required autofocus onChange={this.handleOnChangeEmail.bind(this)} />
                    <input className="password" type="password" name="password" title="password" placeholder="Password" required onChange={this.handleOnChangePassword.bind(this)} /> 
                    <div className="level options" >
                      <div className="checkbox level-left">
                        <input type="checkbox" className="regular-checkbox" />
                        <label for="checkbox"></label>
                        <span>Remember me</span>
                      </div> 
                      <a className="btn btn-link level-right" href="#">Forgot Password?</a>
                    </div> 
                    <button type="submit" className="btn btn-primary">Login</button>
                    <div>
                        <a className="navbar-item">
                        <Link to="/register" className="link" >Register</Link>
                        </a>
                    </div> 
                  </form>
                </div>
              </div>
            </div>
        </div>
     )
 } 

    
  render() { 
    return (
        <div className="main">   
            {this.renderFormLogin()} 
        </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);

 
 
