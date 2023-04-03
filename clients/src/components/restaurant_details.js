import { useEffect, useState } from "react";
import axios from "axios";

function RestaurantDetails({ userId }) {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://challenge-8bmq.onrender.com/restaurants/${userId}`)
      .then((res) => {
        setUserDetails(res.data);
      });
  }, [userId]);

  console.log(userDetails);

  return (
    <main>
      <div className="card mt-4 me-1" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Name: {userDetails.name}</h5>
          <p class="card-text">
            Address: {userDetails.addre}
          </p>
        </div>
      </div>
    </main>
  );
}

export default RestaurantDetails;
