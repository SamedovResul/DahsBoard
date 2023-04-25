import react from "react";
import Data from "../../data/data";
import GeneralChart from "../charts/GeneralChart";
import Map from "../maps/Map";

const GeneralAvarage = ({ Data }) => {
  return (
    <article className="chart">
      <div className="chart-box">
        <div className="card">
          <div className="card-item">
            <div className="card-title">
              <h4 className="card-title-text">Visitors</h4>
            </div>
            <div className="card-body">
              <span className="card-body-content">24.532</span>
            </div>
            <div className="card-footer">
              <span className="text-success card-footer-info">+14%</span>
              <span>Since last week</span>
            </div>
          </div>
          <div className="card-item">
            <div className="card-title">
              <h4 className="card-title-text">Activity</h4>
              <span className="card-title-badget">Annual</span>
            </div>
            <div className="card-body">
              <span className="card-body-content">63.200</span>
            </div>
            <div className="card-footer">
              <span className="text-danger card-footer-info">-12%</span>
              <span>Since last week</span>
            </div>
          </div>
          <div className="card-item">
            <div className="card-title">
              <h4 className="card-title-text">Real-Time</h4>
              <span className="card-title-badget">Monthly</span>
            </div>
            <div className="card-body">
              <span className="card-body-content">1.320</span>
            </div>
            <div className="card-footer">
              <span className="text-danger card-footer-info">-18%</span>
              <span>Since last week</span>
            </div>
          </div>
          <div className="card-item">
            <div className="card-title">
              <h4 className="card-title-text">Bounce</h4>
              <span className="card-title-badget">Yearly</span>
            </div>
            <div className="card-body">
              <span className="card-body-content">12.364</span>
            </div>
            <div className="card-footer">
              <span className="text-success card-footer-info">+27%</span>
              <span>Since last week</span>
            </div>
          </div>
        </div>
        <GeneralChart />
      </div>
      <div className="map-box">
        <Map Data={Data} />
      </div>
    </article>
  );
};

export default GeneralAvarage;
