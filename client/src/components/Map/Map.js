import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import WildfireLocationMarker from '../WildfireLocationMarker/LocationMarker'
import VolcanoLocationMarker from '../VolcanoLocationMarker/LocationMarker'
import IcebergLocationMarker from '../Iceberg/LocationMarker'
import LocationInfoBox from '../InfoBox/InfoBox'
import classes from "./Map.module.css"
import Header from "../Header/Header"

const NATURAL_EVENT_WILDFIRE = 8;
const NATURAL_EVENT_VOLCANO = 12;
const NATURAL_EVENT_ICEBERG = 15;


const Map = ({ eventData, }) => {
    const [option,setOption] =useState("WILDFIRE") 
    const defaultProps = {
        center: {
            lat: 42.3265,
            lng: -122.8756
        },
        zoom: 6
    }
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE && (option ==='WILDFIRE'||option ==='ALL')) {
            return <WildfireLocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        if(ev.categories[0].id === NATURAL_EVENT_ICEBERG && (option ==='ICEBERG'||option ==='ALL')) {
            return <IcebergLocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        if(ev.categories[0].id === NATURAL_EVENT_VOLCANO && (option ==='VOLCANO'||option ==='ALL'))
        {
            return <VolcanoLocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })
console.log(option)
    return (
        <div className={classes.map}>
            <Header changeValue={
                value =>
                    setOption(value)
            } />
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.JMKey }}
                defaultCenter={ defaultProps.center }
                defaultZoom={ defaultProps.zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}


export default Map