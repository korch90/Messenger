import React ,{Component,useState, useEffect}from "react";
import s from "../components/LocalChat.module.css"
import store from "./redux/state";
import axios from 'axios'


class LocalChat extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                store: store,

            };
            this.myRef = React.createRef()
            this.myRef2 = React.createRef()
        }
 
     handler = () => {
        
             let obj = {
                 text: "",
                 time_day: new Date().getDate(),
                 time_year: new Date().getFullYear(),
                 time_mounth: new Date().getMonth(),
                 time_hour: new Date().getHours(),
                 time_minute: new Date().getMinutes(),
                 time_sec: new Date().getSeconds()
             }
             let mess = {
                 text: '',
                 owner: 1,
                 time_day: new Date().getDate(),
                 time_year: new Date().getFullYear(),
                 time_mounth: new Date().getMonth(),
                 time_hour: new Date().getHours(),
                 time_minute: new Date().getMinutes(),
                 time_sec: new Date().getSeconds(),
                
             }
        obj.text = this.myRef.current.value
        store.users_In_Local_Chat[0].messages.push(obj)
        this.myRef.current.value = ""
        this.setState({
            "store": store

        })
      axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
            mess.text = response.data.value
            store.users_In_Local_Chat[0].messages.push(mess)
           
            setTimeout(()=>{this.setState({
                "store": store 
            }
            )
            this.myRef2.current.scrollTop = this.myRef2.current.scrollHeight},2000)
           
        })
        }
    
        render(){
    return ( 
        
        <div className = {s.container_wrapper}>
        <div className={s.user_profile} >
        <div className={s.img_user_main_container} >
            <img className={s.img_user_main} src={require(`../image/${this.props.state.users_In_Local_Chat[0].avatar}.png`)} alt="#" /></div>
            <h3>{this.props.state.users_In_Local_Chat[0].name}</h3>
        </div>
        <div className={s.wrapper_chat_message } > 
        <div ref={this.myRef2}   className={s.chat}>


  { this.props.state.users_In_Local_Chat[0].messages.map(el=>{
        if(el.owner==1){
            return  <div  key={Math.random()} className={s.message_chosen_user} >
            <div> <img src={require(`../image/${this.props.state.users_In_Local_Chat[0].avatar}.png`)} className={s.img} alt='mops' ></img> </div>
            <div className={s.message_chosen_user_text_andtime}>
                <div className={s.message_chosen_user_text} >{el.text}</div>
                <div className={s.message_chosen_user_time}>{el.time_day}/{el.time_mounth}/{el.time_year} { el.time_hour >= 10? el.time_hour: '0'+el.time_hour  }:{el.time_minute>=10?el.time_minute:"0"+el.time_minute}</div>
            </div>
        </div>}
        else{
            return  <div key={Math.random()} className={s.message_own_user} >
           
            <div className={s.message_own_user_text_and_time}>
                <div className={s.message_chosen_user_text} >{el.text}</div>
                <div className={s.message_chosen_user_time}> {el.time_day}/{el.time_mounth}/{el.time_year} {el.time_hour}:{el.time_minute}</div>
            </div>
        </div>
        } })}

        <div className={s.message_own_user} >
        </div>
        </div>
        <div className={s.message} >
        <div className={s.input_container} >
            <input ref={this.myRef}   type="text" placeholder="Type your message" className={s.input} ></input> 
            <img onClick={this.handler} className={s.input_arow} src= {require('../image/arrow.png') } alt="#" ></img>
             </div>
        </div></div> 
        </div>

    )
}

}


export default LocalChat
