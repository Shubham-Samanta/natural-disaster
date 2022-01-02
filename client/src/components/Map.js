import React from "react";
import classes from "../components/Map.module.css"
import GoogleMapReact from "google-map-react"
import LocationMarker from "../components/LocationMarker"


const Map = ({ eventData}) => {
     
     const defaultProps = {
          center: {
            lat: 51.4934,
            lng: 0.0098
          },
          zoom:4
     };
     
     const marker = eventData.map(event => {
          if (event.categories[0].id === 8)
          {
               return (
                    <LocationMarker
                         lat={event.geometries[0].coordinates[1]}
                         lng={event.geometries[0].coordinates[0]}
                    />
               )
          }
          return null;
          })
     console.log(eventData)

     return (
          
          <div className={classes.map}>
               <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.JMkey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
               >
                    
                    {marker}

               </GoogleMapReact>
          </div>
     )
     
}
 
export default Map