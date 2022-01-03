import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import classes from "./LocationMarker.module.css"
const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className={classes.locationmarker} onClick={onClick}>
            <Icon icon={locationIcon} className={classes.locationicon} />
        </div>
    )
}

export default LocationMarker