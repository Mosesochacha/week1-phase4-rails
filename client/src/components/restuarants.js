import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

export default function Restaurant({ name, address, id }) {
  const [restaurants, setRestaurants] = useState([]);
  // const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:3000/restaurants/${id}`, { method: "DELETE" })
      .then(() => setRestaurants(restaurants.filter((r) => r.id !== id)))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h4 className="card-title">Name: {name}</h4>
          <h6 className="card-text">Address: {address}</h6>
          <a href="e" className="btn btn-primary">
            Go somewhere
          </a>
          <button
            onClick={(e) => {
              handleDelete();
              // history.push("/")
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
