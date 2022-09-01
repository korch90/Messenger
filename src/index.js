import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  state  from "./components/redux/state"

import reportWebVitals from './reportWebVitals';
import App from './App';
// let otherDate=new Date(2011,11,10,10,10);
// let nowDate= new Date();
// let delta=nowDate.getTime()-otherDate.getTime();
// console.log(otherDate)
// console.log(Math.floor(delta/1000/60/60/24/60));
const root = ReactDOM.createRoot(document.getElementById('root'));



// let date1 = new Date(2021, 2, 1,0,0);
// let date2 = new Date(2021, 2, 3,0,0);

// console.log(date1<new Date);




root.render(
  <React.StrictMode>

  <App state={state} />
  
        
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
