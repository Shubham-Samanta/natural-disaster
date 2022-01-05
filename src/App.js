import {useState,useEffect} from "react"
import Map from './components/Map/Map';
import axios from "axios"
import Loader from "./components/Loader/Loader"
import classes from "../src/App.module.css"
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getData() {
    try {
      const response = await axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?api_key=jYV7PuwCbvuIvlSqiR0mCaZsVSLX6ebaidZ6h8lq
      `)
          if (response.data.events !== "") {
            setLoading(false);
            setEventData(response.data.events)
            }
        }
          catch(err){console.log(err)}
        }
  
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="classes.App">
      
      {!loading? <Map eventData={eventData} /> : <Loader/>}
    </div>
  );
}

export default App;
