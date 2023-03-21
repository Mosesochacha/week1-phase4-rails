import { useState } from "react";

export default function RestaurantPizzas() {
  const [price , setPrice] = useState("");
  const [restaurant_id , setRestaurantId] = useState("");
  const [pizza_id , setPizzaId] = useState("");
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let obj = {
      price,
      restaurant_id,
      pizza_id
    };
    try {
      const res = await fetch("https://challenge-8bmq.onrender.com/restaurant_pizzas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      if (!res.ok) {
        throw new Error("Failed to create restaurant pizza.");
      }
      const data = await res.json();
      setMessage(data.message);
      setErrors([]);
    } catch (error) {
      setMessage("");
      setErrors([error.message]);
    }
  };

  return (
    <div className="me-12">
      <div className="card me-12">
        <h1>Restaurant Pizzas</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Price:
          </label>
          <br />
          <input
            placeholder="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label>
            Restaurant ID:
          </label>
          <br />
          <input
            placeholder="restaurant_id"
            type="number"
            value={restaurant_id}
            onChange={(e) => setRestaurantId(e.target.value)}
          />
          <br />
          <label>
            Pizza ID:
          </label>
          <br />
          <input
            placeholder="pizza_id"
            type="number"
            value={pizza_id}
            onChange={(e) => setPizzaId(e.target.value)}
          />
          <br />
          {message && <div className="alert alert-success mt-3">{message}</div>}
          {errors.map((error, index) => (
            <div className="alert alert-danger mt-3" key={index}>{error}</div>
          ))}
          <button>create</button>
        </form>
      </div>
    </div>
  );
}
