import React, { Component } from 'react'; 
import './style.css'; 
import { connect } from "react-redux";
import {userActions,loadingActions,newsActions} from '../../actions'; 

class Footer extends Component {
    
    constructor(){
        super(); 
    }  
    
    render() {
        return (
            <div className="footers"> 
                Bulma News Footer 
            </div>
        );
    }
} 

const mapStateToProps = null; 
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
    





 












 
