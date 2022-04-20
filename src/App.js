import {useState, useEffect, useRef,React} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { io } from "socket.io-client";
import {useSpring, animated} from 'react-spring';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () =>{
  return(
    <>
    <h1>its working</h1>
    </>
  )
}

export default App;
