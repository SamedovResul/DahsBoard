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
import locationData from './data/location'

const  App = () =>{
  const [allData, setAllData] = useState([]);
  const [vehicle,setVehicle] = useState({
    lat:'',
    lng:''
  });
  const [sideOpen, setSideOpen] = useState(false);
  const [avarageName, setAvarageName] = useState('')
    const socket = useRef()
  
    useEffect(() => {
      // socket.current = io("wss://wakemeup-app.herokuapp.com",{ transports : ['websocket'] });
      socket.current = io("ws://localhost:5000",{ transports : ['websocket'] });
      socket.current.on("device", (data) =>{
        // setVehicle({
        //   lat:data.lat,
        //   lng:data.lng,
        //   smoke: data.smoke,
        //   phone: data.phone,
        //   sleep: data.sleep,
        //   SürətLimiti: data.SürətLimiti
        // })
        console.log(data)
        // if(locationData[0].id){
        //   data
        // }
      })
    }, [])
  
     
    useEffect(() => {
      // locationData[0].location = vehicle
      
      // Data[0].array[0] = vehicle.smoke
      // Data[0].array[1] = vehicle.phone
      // Data[0].array[2] = vehicle.sleep
      // Data[0].array[3] = vehicle.SürətLimiti
      // console.log(Data[0].array)
    }, [vehicle])
    
    return(
      <Router>
        
        <article className='windows'>
          
            <SideBar sideOpen={sideOpen}    />
            <div  className='right-side'>
              <Navbar setSideOpen={setSideOpen} sideOpen={sideOpen} />
              <TopBar setAvarageName={setAvarageName} />
                <Routes>
                  
                <Route path='/' element={ <GeneralAvarage allData={allData} Data={Data} />} />
                  <Route  path="IndividualAvarage" element={ 
                  <IndividualAvarage
                    avarageName={avarageName} 
                    // calculateRoute={calculateRoute}
                    // directionsResponse={directionsResponse}
                     />
                  } />
                  <Route path="map"  element={ <Map locationData={locationData} Data={Data} vehicle={vehicle}   /> } />
                  <Route path="news"  element={ <News allData={allData} /> } />
                  <Route path='generalChart' element={ <GeneralChart /> }/>
                  </Routes>
              <Excelentboard setAvarageName={setAvarageName} />
            </div>
        </article>
          
      </Router>
    )
  }

export default App;
