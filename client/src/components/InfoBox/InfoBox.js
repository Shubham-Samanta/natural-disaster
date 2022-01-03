import classes from "./InfoBox.module.css"
const LocationInfoBox = ({ info }) => {
     
     return (
         <div className={classes.locationinfo}>
             <h2>Event Location Info</h2>
             
               <h3>TITLE: { info.title }</h3>
             
         </div>
     )
 }
 
 export default LocationInfoBox