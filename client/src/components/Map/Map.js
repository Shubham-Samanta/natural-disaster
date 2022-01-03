import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import WildfireLocationMarker from '../WildfireLocationMarker/LocationMarker'
import VolcanoLocationMarker from '../VolcanoLocationMarker/LocationMarker'
import IcebergLocationMarker from '../Iceberg/LocationMarker'
import LocationInfoBox from '../InfoBox/InfoBox'
import classes from "./Map.module.css"
// define constants
const NATURAL_EVENT_WILDFIRE = 8;
const NATURAL_EVENT_VOLCANO = 12;
const NATURAL_EVENT_ICEBERG =15;
const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <WildfireLocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        if(ev.categories[0].id === NATURAL_EVENT_ICEBERG) {
            return <IcebergLocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        if(ev.categories[0].id === NATURAL_EVENT_VOLCANO)
        {
            return <VolcanoLocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    return (
        <div className={classes.map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.JMKey }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map