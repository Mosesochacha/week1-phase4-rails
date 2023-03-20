import axios from "axios";
import { useEffect , useState } from "react";

function App() {
const [restaurants , setRestaurants] = useState([])

useEffect(()=>{
 axios.get("http://localhost:3000/restaurants")
 .then((res)=>{
  setRestaurants(res.data)
 })
},[])
console.log(restaurants);
  return <h1>Hello from React!</h1>;
}

export default App;