import {useState, useEffect, useRef,React} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { io } from "socket.io-client";
import {useSpring, animated} from 'react-spring';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IndividualAvarage from './component/dataChartTemplates/IndividualAvarage';
import GeneralAvarage from './component/dataChartTemplates/GeneralAvarage'
import SideBar from './component/sideBar/SideBar';
import TopBar from './component/topBar/TopBar'
import Excelentboard from './component/Emplyeefolder/Excelentboard';
import Map from './component/maps/Map';
import News from './component/news/News';
import GeneralChart from './component/charts/GeneralChart'
import Navbar from './component/nav-bar/NavBar'
import Data from './data/data';

const App = () =>{
  return(
    <>
    <h1>its working</h1>
    </>
  )
}

export default App;
