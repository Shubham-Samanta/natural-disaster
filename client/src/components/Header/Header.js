import {useState} from "react";
import classes from "../Header/Header.module.css"
const Header = (props) => {
     const [option,setOption] =useState("")
     return (
          <div className={classes.Header}
               onChange={(e) => {
               e.preventDefault()

               setOption(e.target.value)
               props.changeValue(e.target.value)
               }}>
               <div className={classes.Headline}>Live Natural Disaster Map</div>
               <div className={classes.Options}>
               <select >
                    <option value="WILDFIRE">Wildfire</option>
                    <option value="ICEBERG">Iceberg</option>
                    <option value="VOLCANO">Volcano</option>
                    <option value="ALL">All</option>
               </select>
               </div>
               
               
          </div>
     )
}

export default Header