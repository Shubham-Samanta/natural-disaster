import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify/icons-noto/volcano';
import classes from "./LocationMarker.module.css"
const LocationMarker = ({ lat, lng, onClick }) => {
    return (

        <div className={classes.locationmarker} onClick={onClick}>
            <Icon icon={volcanoIcon} className={classes.locationicon} />
        </div>
    )
}

export default LocationMarker