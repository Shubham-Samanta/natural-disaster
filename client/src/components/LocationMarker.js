import React from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import  classes from "../components/LocationMarker.module.css"
const LocationMarker = (lat,lng,onclick) => {
     return (
          <div className={classes.Locationmarker} onClick={onclick}>
               <Icon icon={locationIcon} className={classes.locationicon}/>
          </div>
     )
}
export default LocationMarker