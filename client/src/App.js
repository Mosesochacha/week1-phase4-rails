import axios from "axios";
import { useEffect , useState } from "react";
import Navbar from "./components/navbar";
import Restaurant from "./components/restuarants";

function App() {
const [restaurants , setRestaurants] = useState([])

useEffect(()=>{
 axios.get("http://localhost:3000/restaurants")
 .then((res)=>{
  setRestaurants(res.data)
 })
},[])
  return (
    <div>
       <Navbar/>
    <div  className="container">
      {restaurants.map((rest)=>{
        return(
          <div className="containers" key={rest.id}>
            <Restaurant
             name = {rest.name}
             address ={rest.address}
            />
          </div>
        )
      })}
     
      </div>
    </div>
  )
}

export default App;