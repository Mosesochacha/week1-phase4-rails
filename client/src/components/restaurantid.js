import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RestaurantId(id) {
  const [restaurant, setRestaurantsId] = useState();

  useEffect(() => {
    axios.get(`https://challenge-8bmq.onrender.com/restaurants/1`).then((res) => {
      setRestaurantsId(res.data);
    });
  }, [id]);
   console.log(restaurant);
  return (
    <div>
     
      {restaurant.map((rest) => {
        return (
          <div key={rest.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
