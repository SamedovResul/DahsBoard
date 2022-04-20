import React,{useEffect,useState} from 'react'
import { GoogleMap, useJsApiLoader,Marker, DirectionsRenderer,} from '@react-google-maps/api';
const Calculate = () => {

  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  async function calculateRoute(destination,originn) {
    const dest = {
      "lat":destination.lat,
      "lng":destination.lng
    }
    const origin = {
      "lat":originn.lat,
      "lng":originn.lng
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      
      origin: origin,
      destination: dest,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }
  
  
  return {
    calculateRoute,
    directionsResponse,
  }
}

export default Calculate