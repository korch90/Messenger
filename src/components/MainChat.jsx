
import React ,{Component,useState, useEffect}from "react";
import state from "./redux/state";
import s from "../components/MainChat.module.css"
import store from "./redux/state";


class MainChat extends React.Component{
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this)
        this.state = {
         store:store
        };

      }

      handler=(el)=>{
       
        el.preventDefault();
        el.stopPropagation();
        let x=+(el.nativeEvent.path[0].attributes.value.value)
let ff=state.users.filter(el=>el.id==x)

state.users_In_Local_Chat=[]
state.users_In_Local_Chat.push(ff[0])
console.log(state.users_In_Local_Chat)
this.props.updateData(this.state.store)

this.setState({
  "store":store
})
} 

  
        render(){
   
    return ( 
      <div  className = {s.container_wrapper}>
       
      <div className={s.chats} ><h3>Chats</h3></div>
      
      {this.props.state.users.map(el => <div value={el.id} key={el.id}  onClick={this.handler} className={s.user_info} >
  <div value={el.id} className={s.user_and_name_and_last_message}> 
  <div  value={el.id} className={s.img_user_main_container} >
  <img value={el.id} className={s.img} src= {require(`../image/${el.avatar}.png`)} alt='mops'  ></img></div>
    <div value={el.id} className={s.user_name_and_last_message} > 
        <h5 value={el.id}>{el.name} </h5>
        <p value={el.id}>{el.messages[0].text}</p>
    
    </div>
    </div>
    <div className={s.last_message_time} > {el.messages[0].time_day} {el.messages[0].time_year}</div>
  </div>)}
     
      </div>
    
    )
}}


export default MainChat