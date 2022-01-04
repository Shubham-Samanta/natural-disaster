import {useState} from "react";
import classes from "../Header/Header.module.css"
const Header = (props) => {
     const [option,setOption] =useState("")
     return (
          <div classes={classes.Header} onChange={(e) => {
               e.preventDefault()

               setOption(e.target.value)
               props.changeValue(e.target.value)
          }}>
               <select>
                    <option value="WILDFIRE">Wildfire</option>
                    <option value="ICEBERG">Iceberg</option>
                    <option value="VOLCANO">Volcano</option>
                    <option value="ALL">All</option>
               </select>
          </div>
     )
}

export default Header