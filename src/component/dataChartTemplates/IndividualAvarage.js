import React, {useState,useEffect} from 'react';
import Data from '../../data/data'
import IndividualChart from '../charts/IndividualChart';
import CalculateFunc from '../Calculate'
import Map from '../maps/Map'
// import AllIndividual from './allIndividuals';


const IndividualAvarage = (props) => {
  const {avarageName,calculateRoute,directionsResponse} =props
  
  
  let avarage
  CalculateFunc(Data)
  let destination
  let originn
  Data.map((individual) =>{
    const {name} = individual
    if (avarageName === name){
      avarage = individual
      destination = individual.dest
      originn = individual.origin
      // calculateRoute(individual.dest,individual.origin)
    }
  })
  useEffect(() => {
    calculateRoute(destination,originn)
  }, [destination,originn])

  return(
    <article className="individual">
      <div>
        <IndividualChart avarage={avarage} />
        <Map directionsResponse={directionsResponse} />
      </div>
    </article>
  ) 
};

{/* <IndividualChart avarage={avarage} /> */}
{/* <Map directionsResponse={directionsResponse} /> */}

export default IndividualAvarage;
