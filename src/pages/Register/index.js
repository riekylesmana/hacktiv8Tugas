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



class Register extends Component{ 
    
constructor(){
    super();  
    this.state={}
}  
    
handleChangeFullName(event) { 
    this.setState({fullNameInput: event.target.value});
}   
handleChangeEmail(event) {
    this.setState({emailInput: event.target.value});
}   
handleChangePassword(event) {
    this.setState({passwordInput: event.target.value});
}   
handleChangeGenderMale(event) {
    this.setState({genderInput: 'Male'});
}   
handleChangeGenderFemale(event) {
    this.setState({genderInput: 'Female'});
}   
handleChangePhone(event) {
    this.setState({phoneInput: event.target.value});
}   
handleChangeBirthDate(event) {
    this.setState({birthDateInput: event.target.value});
} 
    
    

handleClickRegister(event){  
    this.props.ubahFullName(this.state.fullNameInput);  
    this.props.ubahEmail(this.state.emailInput);  
    this.props.ubahPassword(this.state.passwordInput);  
    this.props.ubahGender(this.state.genderInput);  
    this.props.ubahPhone(this.state.phoneInput);  
    this.props.ubahBirthDate(this.state.birthDateInput);  
    
    let path = "/login";
    this.props.history.push(path); 
    
};
       
 renderFormRegister(){
     return(
        <div className="register">
          <div className="register-card"> 
            <div className="card-title logo">
                <a className="logo-text" href="#"> 
                  <img src="https://bulma.io/images/bulma-logo-white.png" width="110" height="28"></img> 
                </a>
              <h1>REGISTER FORM</h1>
            </div> 
            <div className="content">
              <form>  
                <div className="field">
                    <label>Email:</label>   
                    <input className="input" type="email" placeholder="Email" name="email" onChange={this.handleChangeEmail.bind(this)} /> 
                </div>
                <div className="field"> 
                    <label>Password:</label>   
                    <input className="input" type="password" placeholder="Password" name="password" onChange={this.handleChangePassword.bind(this)} /> 
                </div>
                <div className="field"> 
                    <label>Fullname:</label>   
                    <input className="input" type="text" placeholder="Fullname" name="fullname" onChange={this.handleChangeFullName.bind(this)} /> 
                </div>
                <div className="field"> 
                  <label>Gender:</label>   
                  <label className="radio">
                    <input type="radio" name="gender" onChange={this.handleChangeGenderMale.bind(this)} />Male
                  </label>
                  <label className="radio">
                    <input type="radio" name="gender" onChange={this.handleChangeGenderFemale.bind(this)} />Female
                  </label>
                </div>
                <div className="field"> 
                    <label>Phone:</label>   
                    <input className="input" type="text" placeholder="Phone" name="phone" onChange={this.handleChangePhone.bind(this)} /> 
                </div>
                <div className="field"> 
                    <label>Birth Date:</label>   
                    <input className="input" type="date" placeholder="BithDate" name="birthdate" onChange={this.handleChangeBirthDate.bind(this)} /> 
                </div>
                <button onClick={()=>this.handleClickRegister()}  className="btn btn-primary">Submit</button> 
              </form>
            </div>
          </div>
        </div>
     )
 } 

    
  render() { 
    return (
        <div className="main">   
            {this.renderFormRegister()} 
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
        ubahFullName:(fullName)=>dispatch(userActions.ubahFullName(fullName)),
        ubahEmail:(email)=>dispatch(userActions.ubahEmail(email)),
        ubahPassword:(password)=>dispatch(userActions.ubahPassword(password)),
        ubahGender:(gender)=>dispatch(userActions.ubahGender(gender)),
        ubahPhone:(phone)=>dispatch(userActions.ubahPhone(phone)),
        ubahBirthDate:(birthDate)=>dispatch(userActions.ubahBirthDate(birthDate)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Register);
    

 
 
