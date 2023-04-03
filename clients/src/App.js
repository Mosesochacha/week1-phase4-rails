
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Restaurant from "./components/restuarants";
// import RestaurantId from "./components/restaurantid";
import Pizza from "./components/pizzas";
import RestaurantPizzas from "./components/addpizzarestuarant";
import { BrowserRouter, Route } from "react-router-dom";
import RestaurantDetails from "./components/restaurant_details";
function App() {
  const [restaurants, setRestaurants] = useState([]);
  
  const[userId,setUserId] = useState('');
useEffect(() => {
  fetch("https://challenge-8bmq.onrender.com/restaurants")
    .then((response) => response.json())
    .then((data) => setRestaurants(data))
    .catch((error) => console.log(error));
}, []);

function updateId(value){
  setUserId(value)
  console.log(value)
}

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <div className="container">
            {restaurants.map((rest) => {
              return (
                <div className="containers" key={rest.id}>
                  <Restaurant
                    name={rest.name}
                    address={rest.address}
                    id={rest.id}
                    updateId = {updateId}
                  />
                </div>
              );
            })}
          </div>
        </Route>
        <Route exact path="/add">
          <RestaurantPizzas />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
        <Route exact path="/restaurant_details">
          <RestaurantDetails userId={userId} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
