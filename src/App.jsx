import './App.css';
import React from 'react';

import Wrapper from './components/Wrapper';


function App(props) {
    return ( 
    
        <Wrapper state={props.state}  />

    );
}


export default App;