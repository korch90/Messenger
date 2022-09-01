

import React ,{Component,useState, useEffect}from "react";
import './wrapper.css';
import store from "./redux/state";

import ContainerUserProfileInfo from "./ContainerUserProfileInfo";
import MainChat from "./MainChat";
import LocalChat from "./LocalChat";
 


class Wrapper extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
         store:store,
        };
      }
  

      updateData = () => {
         this.setState({store:store})
    
      }
      render(){

        return ( 
          <div className = "wrapper">
                  <ContainerUserProfileInfo updateData={this.updateData}   state={this.props.state}  />
        <MainChat state={this.props.state} updateData={this.updateData}/>
  <LocalChat updateData={this.updateData} state={this.props.state}/>
         </div>
        )


}}
  



export default Wrapper