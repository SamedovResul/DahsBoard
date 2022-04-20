import react from "react";
import Data from '../../data/data';
import GeneralChart from "../charts/GeneralChart";
import News from '../news/News'
import Map from "../maps/Map"


const GeneralAvarage = ({allData, Data}) =>{


  return(
    <article className="chart">
      <div >
        <GeneralChart />
        <News allData={allData} />
      </div>
      <div>
        <Map Data={Data} />
      </div>
      
    </article>
  )
}

export default  GeneralAvarage