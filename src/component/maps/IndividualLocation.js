import React from 'react'
import { Marker } from '@react-google-maps/api'
// import io from "socket.io-client";

const IndividualLocation = (vehicle) => {
  console.log(vehicle)
  return (
    <Marker
    position = {{
      lat: 40.378584,
      lng: 49.847758
    }}/>
  )
  
}

export default IndividualLocation