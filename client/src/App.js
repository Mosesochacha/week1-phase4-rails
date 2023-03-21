import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Restaurant from "./components/restuarants";
// import RestaurantId from "./components/restaurantid";
import Pizza from "./components/pizzas";
import RestaurantPizzas from "./components/addpizzarestuarant";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/restaurants").then((res) => {
      setRestaurants(res.data);
    });
  }, []);
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
      </BrowserRouter>
    </div>
  );
}

export default App;
