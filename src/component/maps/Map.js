import React ,{useState,useCallback,useEffect} from 'react'
import { GoogleMap, useJsApiLoader,Marker, DirectionsRenderer,Polyline} from '@react-google-maps/api';
import Calculate from '../calculateMap/CalculateMapDistance';
import IndividualLocation from './IndividualLocation';
import locationData from '../../data/location';
const Map = (props) => {
  const [map, setMap] = useState(null)
  const {directionsResponse, Data, vehicle} = props;
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyCejJQhkN2JGs2SkWhTNPfQ00xegFnQMM4",
    googleMapsApiKey:'AIzaSyBWwm-7OLF0A2Ue4mYbDrZtuzDfsGCqXKY' 
  })
  console.log(locationData.location)
  useEffect(() => {
    console.log(locationData)
  }, [locationData])
  
  
// dfghjds
  const containerStyle = {
    width: '90%',
    height: '90%'
  };
  const center = {
    lat: 49.803603,
    lng: 40.385220
  };


  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  
  return isLoaded ? (
    <article  className='Map'>
      {/* <p>
        map
      </p> */}
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={locationData.location }
      zoom={15}
      // onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {
        locationData.location.lat ? (
          
          <Marker 
            position = {{
              lat: locationData.location.lat,
              lng: locationData.location.lng
              }}
          />
          // <DirectionsRenderer directions={directionsResponse} />
        ):(
          <>
          {
            <>
              { 
              Data?.map((vehicle,i) =>{
                const  {location} = vehicle
                // console.log(location)
      
                return(
                  <Marker
                  key={i}
                  position = {
                    {
                      lat: 40.378584,
                      lng: 49.847758
                    }
                  }
                  />
                )
              })
              } 
          </>
          }
          
            
          </>
          
        )
      }
      {/* <directions */}
      {/* {
        Data.map((vehicle,i) =>{
          const  {location} = vehicle
          // console.log(location)

          return(
            <Marker
            key={i}
            position = {
              {
                lat: location.lat,
                lng: location.long
              }
            }
            />
          )
        })
      } */}
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
    </article>
) : <></>
}

export default Map