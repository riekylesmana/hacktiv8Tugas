import React, { Component } from 'react'; 
import './style.css';
import axios from "axios";
  

export default class Content extends Component {
    
    constructor(props){
        super(props);   
    } 
      
    
  render() {
    return (
        <div> 
            {this.props.contentFill()}  
        </div> 
    );
  }
}
















 












 
