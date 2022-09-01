

import React ,{Component,useState, useEffect}from "react";
import state from "./redux/state";
import s from "../components/ContainerUserProfileInfo.module.css"
import store from "./redux/state";

class ContainerUserProfileInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        store: store
      };
      this.input_Search = React.createRef()
    }
 

    search_users = () => {
if(this.input_Search.current.value == null){
  state.oldArrUsers=state.users
      this.props.updateData(this.state.store)
}
else{
      let newarr = []
      state.users.forEach(el => {
        if (el.name.includes(this.input_Search.current.value))
          newarr.push(el)
      });
      state.users = newarr
      console.log(newarr)
     
      this.props.updateData(this.state.store)
    }
    }
    search_users_clear = () => {
      this.input_Search.current.value = ""
      state.users=state.oldArrUsers
      this.props.updateData(this.state.store) 
    }
    search_users_clear2=()=>{
      state.oldArrUsers=state.users
      this.props.updateData(this.state.store)
    }  
        render(){
   
    return ( 
      <div className = {s.container_wrapper}>
      <div className={s.user_img_container} > <img src={require('../image/no-img-user.png')} className={s.user_img} alt="#"  /></div>
    <div className={s.input_container}> <input ref={this.input_Search} onInput={this.search_users} onMouseOver={this.search_users_clear2} onMouseOut={this.search_users_clear} type="text" className={s.input} placeholder="Search or start new chat" /> <img className={s.scope} src={require("../image/scope.png")} ></img></div>
      </div>
    )
}}


export default ContainerUserProfileInfo