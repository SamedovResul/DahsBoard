import React ,{useState,useCallback,useEffect,useRef} from 'react'
import { GoogleMap, useJsApiLoader,Marker, DirectionsRenderer,DrawingManager } from '@react-google-maps/api';
import Calculate from '../calculateMap/CalculateMapDistance';
import IndividualLocation from './IndividualLocation';
import locationData from '../../data/location';


const Map = (props) => {
  const refPoly = useRef(null);
  const [map, setMap] = useState(null)
  const {directionsResponse, Data, vehicle} = props;
  const [Drawing, setDrawing] = useState(false)
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyCejJQhkN2JGs2SkWhTNPfQ00xegFnQMM4",
    googleMapsApiKey:'AIzaSyBWwm-7OLF0A2Ue4mYbDrZtuzDfsGCqXKY' 
  })
  

  
  const containerStyle = {
    width: '90%',
    height: '90%'
  };
  const center = {
    lat: 40.388978,
    lng: 49.836279
  };
  

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])



  setTimeout(() => {
    setDrawing(true)
  }, 2000);


  
  const getPaths = (polygon) =>{
    let polygonBounds = polygon.getPath();
    let bounds = [];
    for (var i = 0; i < polygonBounds.length; i++) {
      let point = {
        lat: polygonBounds.getAt(i).lat(),
        lng: polygonBounds.getAt(i).lng()
      };
      // console.log(bounds)
      bounds.push(point);
    }
    const bermudaTriangle = new window.google.maps.Polygon({ paths: bounds });

    locationData.map((locations) =>{
      const {location,id} = locations
      if(!window.google.maps.geometry.poly.containsLocation(location, bermudaTriangle)){
        console.log(id)
        console.log(location.lat)
        alert( `${id} nömrəli obyekt ərazidən uzaqlaşmışdır obyektin coordinatları ${location.lat},${location.lng}` )
      }
    })
    console.log()
  }
  
  
  return (
    <article  className='Map'>

      <GoogleMap
        mapContainerStyle={containerStyle}
        // center={locationData.location }
        center={center}
        zoom={14}
        onLoad={onLoad}
        // onUnmount={onUnmount}
        >
          {
            Drawing ? (
              <>
              <DrawingManager
              ref={refPoly}
                options={{
                  drawingControl: true,
                  drawingControlOptions: {
                    // position:  window.google.maps.ControlPosition.TOP_RIGHT,
                    
                    drawingModes: [
                      // window.google.maps.drawing.OverlayType.CIRCLE,
                      window.google.maps.drawing.OverlayType.POLYGON,
                      // window.google.maps.drawing.OverlayType.POLYLINE,
                      // window.google.maps.drawing.OverlayType.RECTANGLE,
                    ]
                  },
                  polygonOptions: { editable: true },
                  
              }}
              onPolygonComplete={value => getPaths(value)}
              // defaultDrawingMode={window.google.maps.drawing.OverlayType.CIRCLE}
              // defaultOptions={{
              //   drawingControl: true,
              //   drawingControlOptions: {
              //     position: window.google.maps.ControlPosition.TOP_CENTER,
              //     drawingModes: [
              //       window.google.maps.drawing.OverlayType.CIRCLE,
              //       window.google.maps.drawing.OverlayType.POLYGON,
              //       window.google.maps.drawing.OverlayType.POLYLINE,
              //       window.google.maps.drawing.OverlayType.RECTANGLE,
              //     ],
              //   },
              // }}
            /> 
            {
              locationData.map((locations,i) =>{
                const {location} = locations

                return(
                  <Marker key={i} position = {{
                    lat: location.lat,
                    lng: location.lng
                    }}  />
                )
              })
            }
           
            </>
            ) : null
          }
      
      </GoogleMap>

            
        
    {/* <GoogleMap
      mapContainerStyle={containerStyle}
      // center={locationData.location }
      center={center}
      zoom={15}
      // onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {
        locationData.location.lat ? (
          
          <Marker 
            // position = {{
            //   lat: locationData.location.lat,
            //   lng: locationData.location.lng
            //   }}
            position={{
              lat: 41.196903,
              lng: 47.166015
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
      <></>
    </GoogleMap> */}
    </article>
) 
}

export default Map