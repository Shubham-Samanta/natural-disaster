import classes from "./Loader.module.css"
import React from "react"
import BeatLoader from "react-spinners/BeatLoader";
function Loader() {


     return (
          <div className={classes.majorContainer}>
               <BeatLoader color={"#E4572E"}  size={15} />
          </div>
     )
}
export default Loader