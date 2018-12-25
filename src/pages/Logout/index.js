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


class Logout extends Component{ 
    constructor(){
        super();  
    }  
     
    redirect = ()=>{ 
        if(this.props.user.isLogin){ 
            this.props.ubahIsLogin(false);  
        }
        return(
            <Redirect 
                to={{
                pathname:"/login"
                }}
            />
        )
    }   
     

    
render() {   
        return this.redirect();  
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
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
    


 
 
