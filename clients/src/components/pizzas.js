import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pizza() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios.get(" https://challenge-8bmq.onrender.com/pizzas").then((res) => {
      setPizzas(res.data);
    });
  }, []);
  console.log(pizzas);

  return (
    <div className="container">
      {pizzas.map((p) => {
        return (
          <div className="card mt-4 me-1" style={{ width: "18rem" }} key={p.id}>
            <img src={p.image} className="card-img-top" alt="..." />
            <h5>Name: {p.name}</h5>
            <div className="card-body">
              <p className="card-text">Ingredients: {p.ingredients}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
