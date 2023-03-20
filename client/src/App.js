import Navbar from './components/navbar';
import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios';

function App() {
const [restaurants, setRestaurants] = useState()

 useEffect(()=>{
   axios.get("http://localhost:3000/restaurants")
   .then((res)=>{
    setRestaurants(res.data)
   })

 },[])

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
