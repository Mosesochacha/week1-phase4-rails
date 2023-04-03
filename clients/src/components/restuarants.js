import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function Restaurant({ name, address, id, updateId }) {
  const [restaurants, setRestaurants] = useState([]);
  // const history = useHistory();

  console.log('restaurants')

  const handleDelete = () => {
    fetch(`https://challenge-8bmq.onrender.com/restaurants/${id}`, { method: "DELETE" })
      .then(() => setRestaurants(restaurants.filter((r) => r.id !== id)))
      .catch((error) => console.error(error));
  };


  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h4 className="card-title">Name: {name}</h4>
          <h6 className="card-text">Address: {address}</h6>
          <NavLink onClick={()=>{
            updateId(id)
          }} exact to = "/restaurant_details" className="btn btn-primary">
            ShowPizzaDetails
          </NavLink>
          <button
            onClick={(e) => {
              handleDelete();
              window.location.reload()
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
