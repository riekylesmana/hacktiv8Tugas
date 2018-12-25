 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home, Register, Login, Logout, News, NewsDetail, Profile   } from './pages';
import {  BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './configs';

class App extends Component {
    
    
    constructor(){
        super();
        this.state={
            isLogin:false
        } 
    }
    
    
  render() {
    return (
        <Provider store={store} >
            <Router>
                <div className="main"> 
                    <Switch>
                        <Route path='/login' component={Login}/> 
                        <Route path='/register' component={Register}/> 
                        <Route path='/profile' component={Profile}/> 
                        <Route path='/news' component={News}/> 
                        <Route path='/newsdetail' component={NewsDetail}/> 
                        <Route path='/logout' component={Logout}/> 
                        <Route path='/' component={News}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
  }
}

 

export default App;

