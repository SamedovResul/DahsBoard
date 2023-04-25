import { useState, useEffect, React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IndividualAvarage from "./component/dataChartTemplates/IndividualAvarage";
import GeneralAvarage from "./component/dataChartTemplates/GeneralAvarage";
import SideBar from "./component/sideBar/SideBar";
import Map from "./component/maps/Map";
import GeneralChart from "./component/charts/GeneralChart";
import Navbar from "./component/nav-bar/NavBar";
import Data from "./data/data";
import locationData from "./data/location";

const socket = io.connect("https://wakemex.azurewebsites.net/");

const App = () => {
  const [allData, setAllData] = useState([]);
  const [vehicle, setVehicle] = useState({
    lat: "",
    lng: "",
  });
  const [sideOpen, setSideOpen] = useState(false);
  const [avarageName, setAvarageName] = useState("");

  useEffect(() => {
    socket.on("location", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <Router>
      <article className="windows">
        <SideBar sideOpen={sideOpen} />
        <div className="right-side">
          <Navbar setSideOpen={setSideOpen} sideOpen={sideOpen} />
          <Routes>
            <Route
              path="/"
              element={<GeneralAvarage allData={allData} Data={Data} />}
            />
            <Route
              path="IndividualAvarage"
              element={
                <IndividualAvarage
                  avarageName={avarageName}
                  // calculateRoute={calculateRoute}
                  // directionsResponse={directionsResponse}
                />
              }
            />
            <Route
              path="map"
              element={
                <Map
                  locationData={locationData}
                  Data={Data}
                  vehicle={vehicle}
                />
              }
            />
            <Route path="generalChart" element={<GeneralChart />} />
          </Routes>
        </div>
      </article>
    </Router>
  );
};

export default App;
