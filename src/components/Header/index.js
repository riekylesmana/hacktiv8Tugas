import React, { Component } from 'react'; 
import './style.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {userActions} from '../../actions';
import {LOGO}  from '../../images';

 
class Header extends Component{
     
    
renderHeader(){
    return(
        <nav className="navbar is-primary headernav">
              <div className="navbar-brand">
                <a className="navbar-item logo-text" href="#"> 
                  <img src="https://bulma.io/images/bulma-logo-white.png" width="110" height="28"></img>NEWS
                </a>  
              </div> 
              <div className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item">
                    <Link to="/" className="link" >Home</Link>
                  </a>  
                </div> 
                <div className="navbar-end">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        {this.props.user.fullName }
                    </a> 
                    <div className="navbar-dropdown">
                      <a className="navbar-item">
                        <Link to="/profile" className="link" >Profile</Link> 
                      </a>  
                      <a className="navbar-item">
                        <Link to="/logout" className="link" >Logout</Link> 
                      </a>  
                    </div>
                  </div>
                </div>
              </div>     
        </nav>
    );
}
    
    
    render(){
        return( 
            <div className="main">  
            {this.renderHeader()}
            </div> 
        )
    }
}

 


const mapStateToProps = (state) => {
    console.log('state:',state);
    return {
        user:state.user, 
    };
  };
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
    
    
 








 












 
