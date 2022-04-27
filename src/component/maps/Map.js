import React ,{useState,useCallback,useEffect} from 'react'
import { GoogleMap, useJsApiLoader,Marker, DirectionsRenderer,Polyline} from '@react-google-maps/api';
import Calculate from '../calculateMap/CalculateMapDistance';
import IndividualLocation from './IndividualLocation';
const Map = (props) => {
  const [map, setMap] = useState(null)
  const {directionsResponse, location, vehicle} = props;
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyCejJQhkN2JGs2SkWhTNPfQ00xegFnQMM4",
    googleMapsApiKey:'AIzaSyBWwm-7OLF0A2Ue4mYbDrZtuzDfsGCqXKY' 
  })
  console.log(location)
  // console.log("test")
  
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
      center={center}
      zoom={15}
      // onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {
        directionsResponse === undefined ? (
          
          <Marker 
            position = {{
              lat: 49.803603,
              lng: 40.385220
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
                      lat: location.lat,
                      lng: location.long
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